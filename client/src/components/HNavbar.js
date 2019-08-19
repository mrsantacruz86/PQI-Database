import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
      <Navbar bg="light" expand="md" variant="light" fixed="top">
        <Navbar.Brand as={RRNavLink} to="/">
          PQI TOOLS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={RRNavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={RRNavLink} exact to="/dashboard">
              Dashboard
            </Nav.Link>
            <NavDropdown title="House Audits" id="basic-nav-dropdown">
              <NavDropdown.Item as={RRNavLink} exact to="/houseaudits">
                All House Audits
              </NavDropdown.Item>
              <NavDropdown.Item as={RRNavLink} exact to="/houseaudits/new">
                New House Audit
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            {!auth.isSignedIn ? (
              <Nav.Link as={RRNavLink} exact to="/login">
                <Button variant="outline-primary">Login</Button>
              </Nav.Link>
            ) : (
              <NavDropdown
                alignRight
                title={<i className="fas fa-user-circle fa-2x text-primary" />}
                id="account-dropdown"
              >
                <NavDropdown.Item as={RRNavLink} exact to="/users/account">
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item onClick={e => this.logout(e)}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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