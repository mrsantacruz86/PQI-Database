import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { compose } from 'redux';
import { connect } from 'react-redux';
import { login, logout } from '../actions/appActions';
import MainFrame from '../components/MainFrame';


class LandingPage extends Component {

  render() {
    // const { auth } = this.props.app;
    return (
      <div>
        <MainFrame />
        {/* <h3>Landing page content goes here</h3> */}
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