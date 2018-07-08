import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './AuthContext';

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
        <AuthProvider>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
