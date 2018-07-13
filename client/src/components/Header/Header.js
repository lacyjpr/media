import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

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
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Media</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <AuthConsumer>
                  {({ isAuth }) => (
                    <NavItem>
                      {isAuth && (
                        <NavLink tag={Link} to="/userhome">
                          User Home
                        </NavLink>
                      )}
                    </NavItem>
                  )}
                  {/* <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem> */}
                </AuthConsumer>

                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
                <AuthConsumer>
                  {({ isAuth, login, logout }) => (
                    <div>
                      {isAuth ? (
                        <div>
                          <NavItem>
                            <Link to="/userhome">User Home</Link>
                          </NavItem>
                          <NavItem>
                            <button onClick={logout}>logout</button>
                          </NavItem>
                        </div>
                      ) : (
                        <button onClick={login}>login</button>
                      )}
                    </div>
                  )}
                </AuthConsumer>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

export default Header;
