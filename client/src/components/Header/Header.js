import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import person from '../../assets/person-outline.svg';
import { AuthConsumer } from './../AuthContext';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Navbar color="light" light expand="xs">
        <NavbarBrand href="/">Media</NavbarBrand>
        <Nav className="ml-auto nav" navbar>
          <AuthConsumer>
            {({ isAuth, login, logout }) => (
              <div>
                <NavItem>
                  {!isAuth && (
                    <div>
                      <NavLink href="#" onClick={login}>
                        login
                      </NavLink>
                      <NavLink tag={Link} to="/signup">
                        Sign Up
                      </NavLink>
                    </div>
                  )}
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  {isAuth && (
                    <div>
                      <DropdownToggle nav caret>
                        <img src={person} alt="person" className="person" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <NavLink tag={Link} to="/userhome">
                            User Home
                          </NavLink>
                        </DropdownItem>
                        <DropdownItem>
                          <NavLink href="#" onClick={logout}>
                            logout
                          </NavLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </div>
                  )}
                </UncontrolledDropdown>
              </div>
            )}
          </AuthConsumer>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
