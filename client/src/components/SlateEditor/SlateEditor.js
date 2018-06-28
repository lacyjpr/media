import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'This text can be edited by the user.',
              },
            ],
          },
        ],
      },
    ],
  },
});

function MarkHotkey(options) {
  const { type, key } = options;

  // Return our "plugin" object, containing the `onKeyDown` handler.
  return {
    onKeyDown(event, change) {
      // Check that the key pressed matches our `key` option.
      if (!event.ctrlKey || event.key != key) return;

      // Prevent the default characters from being inserted.
      event.preventDefault();

      // Toggle the mark `type`.
      change.toggleMark(type);
      return true;
    },
  };
}

const plugins = [
  MarkHotkey({ key: 'b', type: 'bold' }),
  MarkHotkey({ key: 'i', type: 'italic' }),
];

// Define our app...
class SlateEditor extends Component {
  // Set the initial value when the app is first constructed.
  state = {
    value: initialValue,
  };

  // On change, update the app's React state with the new editor value.
  onChange = ({ value }) => {
    this.setState({ value });
  };

  // Render the editor.
  render() {
    return (
      <Editor
        plugins={plugins}
        value={this.state.value}
        onChange={this.onChange}
        renderMark={this.renderMark}
      />
    );
  }

  renderMark = props => {
    switch (props.mark.type) {
      case 'bold':
        return <strong>{props.children}</strong>;
      case 'italic':
        return <em>{props.children}</em>;
    }
  };
}

export default SlateEditor;
