import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../actions/appActions';
import './LoginForm.css'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: ""
      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.user);
    this.setState({
      user: {
        username: "",
        password: ""
      }
    })
  };

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { auth } = this.props.app;
    if (auth) { //checks if the user is authenticated and redirects to home
      return (
        <Redirect to="/" />
      )
    };
    return (
      <React.Fragment >
        <div className="col">
          <div className="login-form">
            <div className="user-icon text-primary">
              <i className="fas fa-user-circle"></i>
            </div>
            <h2>Sign in</h2>

            <form className="form-signin" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="username">Username or email</label>
                <input type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username or email"
                  name="username"
                  onChange={this.handleInputChange}
                  value={this.state.user.username} />
              </div>

              <div className="form-group">
                <label for="password">Password</label>
                <input type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleInputChange}
                  value={this.state.user.password}
                />
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  login
})(LoginForm);