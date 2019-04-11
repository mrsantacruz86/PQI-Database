import React from 'react';
import RegisterForm from '../components/RegisterForm';

class SingUpPage extends React.Component {

  render() {
    return (
      <React.Fragment pageName="Login">
        <RegisterForm />
      </React.Fragment>
    );
  }
}

export default (SingUpPage);