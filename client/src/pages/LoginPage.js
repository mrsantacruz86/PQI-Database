import React from 'react';
import BarAndMenu from '../components/BarAndMenu';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {

  render() {
    return (
      <BarAndMenu pageName="Login">
        <LoginForm />
      </BarAndMenu>
    );
  }
}

export default (LoginPage);