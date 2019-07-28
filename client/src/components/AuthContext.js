// Context credit https://codesandbox.io/s/zl8wq6xlqx
import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor() {
    super();

    this.state = { isAuth: false };
  }

  login = () => {
    // Fake async with setTimeout
    setTimeout(() => this.setState({ isAuth: true }), 1000);
    console.log(this.state.isAuth)
  };

  logout = () => {
    this.setState({ isAuth: false });
    console.log(this.state.isAuth)
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
