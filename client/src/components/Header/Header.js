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
                {({ isAuth, login, logout }) => (
                  <NavItem>
                    {isAuth ? (
                      <NavLink href="#" onClick={logout}>
                        logout
                      </NavLink>
                    ) : (
                      <NavLink href="#" onClick={login}>
                        login
                      </NavLink>
                    )}
                  </NavItem>
                )}
              </AuthConsumer>

              <AuthConsumer>
                {({ isAuth }) => (
                  <UncontrolledDropdown nav inNavbar>
                    {isAuth && (
                      <div>
                        <DropdownToggle nav caret>
                          <img src={person} alt="person" />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>
                            <NavItem>
                              <NavLink tag={Link} to="/userhome">
                                User Home
                              </NavLink>
                            </NavItem>
                          </DropdownItem>
                          <DropdownItem>Option 2</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Reset</DropdownItem>
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
