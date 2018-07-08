import React from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

const Header = () => (
  <header>
    <AuthConsumer>
      {({ isAuth, login, logout }) => (
        <div>
          <h3>
            <Link to="/">HOME</Link>
          </h3>
          {isAuth ? (
            <ul>
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={logout}>logout</button>
            </ul>
          ) : (
            <button onClick={login}>login</button>
          )}
        </div>
      )}
    </AuthConsumer>
  </header>
);

export default Header;
