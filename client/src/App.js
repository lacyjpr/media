import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext.js';
import { Button } from 'reactstrap';

import Header from './components/Header';
import Home from './components/Home';
import UserHome from './components/UserHome';
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './components/SignUp';

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
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
              <ProtectedRoute path="/userhome" component={UserHome} />
            </Switch>
            <Button color="primary">Bootstrap Button</Button>
          </AuthProvider>
        </Router>
      </div>
    );
  }
}

export default App;
