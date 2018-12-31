import React from 'react';
import BarAndMenu from '../components/BarAndMenu';
import RegisterForm from '../components/RegisterForm';

class SingUpPage extends React.Component {

  render() {
    return (
      <BarAndMenu pageName="Login">
        <RegisterForm />
      </BarAndMenu>
    );
  }
}

export default (SingUpPage);