import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import "./Dropdown.css";
import { toggleUserMenu, logout } from '../../actions/appActions';

class Dropdown extends Component {

  toggleDropdown = (e) => {
    e.preventDefault();
    this.props.toggleUserMenu();
  }

  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const open = this.props.app.userMenuOpen;

    return (
      <div className="nav-item dropdown">
        <a className="nav-link text-light"
          href="#nogo"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          id="userMenu"
          onClick={e => this.toggleDropdown(e)}
        >
          <i className="fas fa-user-circle fa-lg"></i>
        </a>
        <div className={`dropdown-menu dropdown-menu-md-right ${open ? "show" : ""}`}
          aria-labelledby="userMenu"
        >
          <Link to="/account" className="dropdown-item">Account</Link>
          <a href="#nogo"
            className="dropdown-item"
            onClick={e => this.logout(e)}
          >Sing out</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {
  toggleUserMenu,
  logout
})(Dropdown);