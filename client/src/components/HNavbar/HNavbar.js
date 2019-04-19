import React, { Component } from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {
  Button,
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
  DropdownItem
} from 'reactstrap';
import { toggleUserMenu, logout } from '../../actions/appActions';

import "./HNavbar.css";

class HNavbar extends Component {

  selected = (path) => {
    if (path !== window.location.pathname) {
      return "";
    } else {
      return " active";
    }
  }
  toggle = () => {
    this.props.toggleUserMenu();
  }
  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { auth, userMenuOpen: navBarOpen } = this.props.app;

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={RRNavLink} to="/">PQI TOOLS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={navBarOpen} navbar>
            <Nav className="ml-auto d-inline-flex" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/dashboard" activeClassName="active">
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/house-audits" activeClassName="active">
                  House Audits
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/car-audits" activeClassName="active">
                  Vehicle Audits
                </NavLink>
              </NavItem>
              {!auth ?
                // <NavItem>
                <NavLink tag={RRNavLink} exact to="/login" className="login-link bg-primary text-white py-1 my-auto" >
                  Login
                  </NavLink>
                // </NavItem>
                :
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    <i className="fas fa-user-circle fa-lg text-white"></i>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Account
                    </DropdownItem>
                    {/* <DropdownItem divider /> */}
                    <DropdownItem onClick={e => this.logout(e)}>
                      Sign Out
                  </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {
  toggleUserMenu,
  logout
})(HNavbar);