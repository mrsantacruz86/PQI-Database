import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { Field, reduxForm } from 'redux-form';
import { register } from '../../actions/appActions';
import './RegisterForm.css';

//Validation
// const validate = values => {
//   const errors = {}
//   const requiredFields = [
//     "firstName",
//     "lastName",
//     "username",
//     "email",
//     "password"
//   ]
//   requiredFields.forEach(field => {
//     if (!values[field]) {
//       errors[field] = 'Required'
//     }
//   })
//   if (
//     values.email &&
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address'
//   }
//   return errors
// };


class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
      }
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.user);
    this.props.register(this.state.user);
    this.setState({
      user: {
        firstName: "",
        lastName: "",
        email: "",
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
    return (
      <div >
        <div className="user-icon text-primary">
          <i className="fas fa-user-circle"></i>
        </div>
        <h2>Sign in</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              name="firstName"
              onChange={this.handleInputChange}
              value={this.state.user.firstName} />
          </div>

          <div className="form-group">
            <label for="lastName">Last Name</label>
            <input type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              name="lastName"
              onChange={this.handleInputChange}
              value={this.state.user.lastName} />
          </div>

          <div className="form-group">
            <label for="email">Email</label>
            <input type="text"
              className="form-control"
              id="email"
              placeholder="Email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.user.email} />
          </div>

          <div className="form-group">
            <label for="username">Username or email</label>
            <input type="text"
              className="form-control"
              id="username"
              placeholder="Username"
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

          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>

    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  register
})(RegisterForm);