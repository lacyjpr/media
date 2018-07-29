import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import { renderNode, renderMark } from '../../Utilities';

const existingValue = JSON.parse(localStorage.getItem('content'));
const existingTitle = localStorage.getItem('title');
class SlateViewer extends Component {
  state = {
    title: existingTitle || 'Title',
    value: Value.fromJSON(existingValue || { Content: null }),
  };

  render() {
    return (
      <div className="wrap-editor">
        <h2>Slate Viewer</h2>
        <h1>{this.state.title}</h1>
        <Editor
          readOnly
          value={this.state.value}
          renderNode={renderNode}
          renderMark={renderMark}
        />
      </div>
    );
  }
}

export default SlateViewer;
