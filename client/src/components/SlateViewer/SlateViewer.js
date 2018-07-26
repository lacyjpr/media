import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import { renderNode, renderMark } from '../../Utilities';

const existingValue = JSON.parse(localStorage.getItem('content'));

class SlateViewer extends Component {
  state = {
    value: Value.fromJSON(existingValue),
  };

  render() {
    return (
      <div className="wrap-editor">
        <h2>Slate Viewer</h2>
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
