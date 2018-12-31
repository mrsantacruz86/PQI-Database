import React from 'react';
import PropTypes from 'prop-types';
import BarAndMenu from '../components/BarAndMenu';
import LoginForm from '../components/LoginForm';

class Dashboard extends React.Component {

  render() {
    return (
      <BarAndMenu pageName="Login">
        <LoginForm />
      </BarAndMenu>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (Dashboard);