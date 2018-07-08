// Context credit https://codesandbox.io/s/zl8wq6xlqx
import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor() {
    super();

    this.state = { isAuth: false };
  }

  render() {
    return (
      <AuthContext.Provider value={{ isAuth: this.state.isAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
