import React from 'react';
import LoginForm from '../../components/LoginForm';

class LoginPage extends React.Component {

  render() {
    return (
      <React.Fragment pageName="Login">
        <LoginForm />
      </React.Fragment>
    );
  }
}

export default (LoginPage);