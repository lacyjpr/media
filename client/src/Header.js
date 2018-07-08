import React from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

const Header = () => (
  <header>
    <AuthConsumer>
      {({ isAuth }) => (
        <div>
          <h3>
            <Link to="/">HOME</Link>
          </h3>
          {isAuth ? (
            <ul>
              <Link to="/dashboard">Dashboard</Link>
              <button>logout</button>
            </ul>
          ) : (
            <button>login</button>
          )}
        </div>
      )}
    </AuthConsumer>
  </header>
);

export default Header;
