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
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <header>
        <div>
          <Navbar color="light" light expand="xs">
            <NavbarBrand href="/">Media</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <AuthConsumer>
                {({ isAuth, login }) => (
                  <NavItem>
                    {!isAuth && (
                      <NavLink href="#" onClick={login}>
                        login
                      </NavLink>
                    )}
                  </NavItem>
                )}
              </AuthConsumer>

              <AuthConsumer>
                {({ isAuth, logout }) => (
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
