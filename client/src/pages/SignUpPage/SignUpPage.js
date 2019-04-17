import React, { Component } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

class SingUpPage extends Component {

  render() {
    return (
      <React.Fragment pageName="Login">
        <RegisterForm />
      </React.Fragment>
    );
  }
}

export default (SingUpPage);