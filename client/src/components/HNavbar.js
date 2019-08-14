import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
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
  DropdownItem
} from 'reactstrap';
import { toggleNavbar } from '../actions/appActions';
import { logout } from '../actions/authActions';

class HNavbar extends Component {
  selected = path => {
    if (path !== window.location.pathname) {
      return '';
    } else {
      return ' active';
    }
  };
  toggle = () => {
    this.props.toggleNavbar();
  };
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const { auth, navbarOpen } = this.props;

    return (
      <div>
        <Navbar color="primary" dark expand="md" className="fixed-top">
          <NavbarBrand tag={RRNavLink} to="/">
            PQI TOOLS
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={navbarOpen} navbar>
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
                <NavLink tag={RRNavLink} exact to="/houseaudits" activeClassName="active">
                  House Audits
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/car-audits" activeClassName="active">
                  Vehicle Audits
                </NavLink>
              </NavItem>
              <NavItem>
                {!auth.isSignedIn ? (
                  <NavLink tag={RRNavLink} exact to="/login">
                    <div className="btn btn-outline-light btn-sm">Login</div>
                  </NavLink>
                ) : (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                      <i className="fas fa-user-circle fa-lg" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Account</DropdownItem>
                      <DropdownItem onClick={e => this.logout(e)}>Sign Out</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  navbarOpen: state.app.navbarOpen
});

export default connect(
  mapStateToProps,
  {
    toggleNavbar,
    logout
  }
)(HNavbar);
