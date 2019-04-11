import React from 'react';
import MainFrame from '../components/MainFrame';
import RegisterForm from '../components/RegisterForm';

class SingUpPage extends React.Component {

  render() {
    return (
      <MainFrame pageName="Login">
        <RegisterForm />
      </MainFrame>
    );
  }
}

export default (SingUpPage);