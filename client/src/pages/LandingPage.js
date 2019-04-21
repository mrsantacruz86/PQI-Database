import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { compose } from 'redux';
import { connect } from 'react-redux';
import { login, logout } from '../actions/appActions';
import MainFrame from './MainFrame';


class LandingPage extends Component {

  render() {
    return (
      <div>
        <h3>Landing page</h3>
      </div>
    );
  }
}

// LandingPage.propTypes = {
// };

const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps, {
    login,
    logout,
  })(LandingPage);