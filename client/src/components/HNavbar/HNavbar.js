import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Dropdown from '../Dropdown'
import "./HNavbar.css";

class HNavbar extends Component {

  render() {
    const selected = (path) => {
      if (path !== window.location.pathname) {
        return "";
      } else {
        return " active";
      }
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">PQI TOOLS</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item${selected("/")}`}>
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className={`nav-item${selected("/dashboard")}`}>
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className={`nav-item${selected("/house-audits")}`}>
                <Link className="nav-link" to="/house-audits">House Audits</Link>
              </li>
            </ul>
            <Link className="btn btn-outline-light btn-sm" to="/login">
              Login
            </Link>
            <Dropdown />


          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(HNavbar);