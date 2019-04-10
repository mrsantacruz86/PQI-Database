import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login, logout } from '../actions/appActions';
import MainFrame from '../components/MainFrame';


class LandingPage extends Component {

  handleChange = () => {
    if (this.props.app.auth) {
      this.props.logout();
    } else {
      this.props.login();
    }
  };

  render() {
    // const { auth } = this.props.app;
    return (
      <div>
        <MainFrame pageName="Landing Page">
          <h1>
            This is where the content goes...
          </h1>
        </MainFrame>
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