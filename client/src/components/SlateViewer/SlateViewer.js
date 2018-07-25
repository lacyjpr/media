import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

const existingValue = JSON.parse(localStorage.getItem('content'));

class SlateViewer extends Component {
  state = {
    value: Value.fromJSON(existingValue),
  };
  render() {
    return (
      <div>
        <h2>Slate Viewer</h2>
        <Editor readOnly value={this.state.value} />
      </div>
    );
  }
}

export default SlateViewer;
