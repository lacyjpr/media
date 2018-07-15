import React, { Component } from 'react';
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

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <Navbar color="light" light expand="xs">
            <NavbarBrand href="/">Media</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <AuthConsumer>
                {({ isAuth, login, logout }) => (
                  <div>
                    <NavItem>
                      {!isAuth && (
                        <NavLink href="#" onClick={login}>
                          login
                        </NavLink>
                      )}
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      {isAuth && (
                        <div>
                          <DropdownToggle nav caret>
                            <img src={person} alt="person" />
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
        </div>
      </header>
    );
  }
}

export default Header;
