import React, { Component } from 'react';

import SlateEditor from './components/SlateEditor';
import SlateViewer from './components/SlateViewer';

import { Button } from 'reactstrap';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('/users').then(res =>
      res.json().then(data => {
        console.log('data', JSON.stringify(data, null, 4));
      })
    );
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <SlateEditor />
        <SlateViewer />
        <Button color="primary">Bootstrap Button</Button>
      </div>
    );
  }
}

export default App;
