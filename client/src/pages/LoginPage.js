import React from 'react';
import MainFrame from '../components/MainFrame';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {

  render() {
    return (
      <MainFrame pageName="Login">
        <LoginForm />
      </MainFrame>
    );
  }
}

export default (LoginPage);