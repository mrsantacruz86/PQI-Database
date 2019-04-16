import React from 'react';
import LoginForm from '../../components/LoginForm';
import './LoginPage.css';

class LoginPage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="login-page text-center">
          <div className="user-icon mx-auto">
            <img src={`${process.env.PUBLIC_URL}/hhch-logo.svg`} alt="His House Children's Home Logo" />
          </div>
          <h3>Sign in to PQI Tools</h3>
          <LoginForm />
        </div>
      </React.Fragment>
    );
  }
}

export default (LoginPage);