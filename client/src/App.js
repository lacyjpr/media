import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';

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
        <Router>
          <AuthProvider>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    );
  }
}

export default App;
