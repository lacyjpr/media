import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import { isKeyHotkey } from 'is-hotkey';

import { Button, Icon, Toolbar } from './components';

import { renderNode, renderMark } from '../../Utilities';
import initialValue from './value.json';
import './SlateEditor.css';

// Define the default node type.
const DEFAULT_NODE = 'paragraph';

const existingValue = JSON.parse(localStorage.getItem('content'));
const existingTitle = localStorage.getItem('title');

//Define hotkey matchers.
const isBoldHotkey = isKeyHotkey('mod+b');
const isItalicHotkey = isKeyHotkey('mod+i');
const isUnderlinedHotkey = isKeyHotkey('mod+u');
const isCodeHotkey = isKeyHotkey('mod+`');

class SlateEditor extends Component {
  state = {
    title: null,
    // Deserialize the initial editor value.
    value: Value.fromJSON(existingValue || initialValue),
  };

  // Focus on title
  componentDidMount() {
    this.title.focus();
  }

  // Check if the current selection has a mark with `type` in it.
  hasMark = type => {
    const { value } = this.state;
    return value.activeMarks.some(mark => mark.type === type);
  };

  // Check if the any of the currently selected blocks are of `type`.
  hasBlock = type => {
    const { value } = this.state;
    return value.blocks.some(node => node.type === type);
  };

  // Render a mark-toggling toolbar button.
  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type);

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickMark(event, type)}
        title={type}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  };

  // Render a block-toggling toolbar button.
  renderBlockButton = (type, icon) => {
    let isActive = this.hasBlock(type);

    // if (['numbered-list', 'bulleted-list'].includes(type)) {
    //   const { value } = this.state;
    //   const parent = value.document.getParent(value.blocks.first().key);
    //   isActive = this.hasBlock('list-item') && parent && parent.type === type;
    // }

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickBlock(event, type)}
        title={type}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  };

  // On change, save the new `value`.
  onChange = ({ value }) => {
    // Check for change before saving
    if (value.document !== this.state.value.document) {
      const content = JSON.stringify(value.toJSON());
      localStorage.setItem('content', content);
    }

    this.setState({ value });
  };

  titleChange = event => {
    event.preventDefault();
    const title = event.target.textContent;
    localStorage.setItem('title', title);

    this.setState({ title });
  };

  // On key down, if it's a formatting command toggle a mark.
  onKeyDown = (event, change) => {
    let mark;

    if (isBoldHotkey(event)) {
      mark = 'bold';
    } else if (isItalicHotkey(event)) {
      mark = 'italic';
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined';
    } else if (isCodeHotkey(event)) {
      mark = 'code';
    } else {
      return;
    }

    event.preventDefault();
    change.toggleMark(mark);
    return true;
  };

  // When a mark button is clicked, toggle the current mark.
  onClickMark = (event, type) => {
    event.preventDefault();
    const { value } = this.state;
    const change = value.change().toggleMark(type);
    this.onChange(change);
  };

  // When a block button is clicked, toggle the block type.
  onClickBlock = (event, type) => {
    event.preventDefault();
    const { value } = this.state;
    const change = value.change();
    const { document } = value;

    // Handle everything but list buttons.
    if (type !== 'bulleted-list' && type !== 'numbered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock('list-item');

      if (isList) {
        change
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else {
        change.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item');
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type);
      });

      if (isList && isType) {
        change
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else if (isList) {
        change
          .unwrapBlock(
            type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type);
      } else {
        change.setBlocks('list-item').wrapBlock(type);
      }
    }

    this.onChange(change);
  };

  onClickUndo = event => {
    event.preventDefault();
    const { value } = this.state;
    const change = value.change().undo();
    this.onChange(change);
  };

  onClickRedo = event => {
    event.preventDefault();
    const { value } = this.state;
    const change = value.change().redo();
    this.onChange(change);
  };

  render() {
    return (
      <div className="wrap-editor">
        <Toolbar>
          {this.renderMarkButton('bold', 'format_bold')}
          {this.renderMarkButton('italic', 'format_italic')}
          {this.renderMarkButton('underlined', 'format_underlined')}
          {this.renderMarkButton('code', 'code')}
          {this.renderBlockButton('heading-one', 'looks_one')}
          {this.renderBlockButton('heading-two', 'looks_two')}
          {this.renderBlockButton('block-quote', 'format_quote')}
          {this.renderBlockButton('numbered-list', 'format_list_numbered')}
          {this.renderBlockButton('bulleted-list', 'format_list_bulleted')}
          <Button onMouseDown={this.onClickUndo} title="Undo">
            <Icon>undo</Icon>
          </Button>
          <Button onMouseDown={this.onClickRedo} title="Redo">
            <Icon>redo</Icon>
          </Button>
        </Toolbar>

        <div
          ref={node => (this.title = node)}
          contentEditable="true"
          suppressContentEditableWarning="true"
          spellCheck
          onInput={this.titleChange}
        >
          <h1>{existingTitle || 'Title'}</h1>
        </div>

        <Editor
          spellCheck
          placeholder="Enter some rich text..."
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderNode={renderNode}
          renderMark={renderMark}
        />
      </div>
    );
  }
}

export default SlateEditor;
