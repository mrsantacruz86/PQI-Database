//REQUIRE AUTHORIZATION
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../history';

//This is a Higher Order Component that passes the authentication info to the enclosed component
const requireAuth = ComposedComponent => {
  class Authorize extends Component {
    componentWillMount() {
      if (!this.props.auth.isSignedIn) {
        console.log(history);
        history.push('/login');
      }
    }
    render() {
      return <ComposedComponent />;
    }
  }

  Authorize.propTypes = {
    auth: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });

  return connect(mapStateToProps)(Authorize);
};

export default requireAuth;
