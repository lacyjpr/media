import React, { Component } from 'react';
import SlateEditor from './components/SlateEditor';

import logo from './logo.svg';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SlateEditor />
      </div>
    );
  }
}

export default App;
