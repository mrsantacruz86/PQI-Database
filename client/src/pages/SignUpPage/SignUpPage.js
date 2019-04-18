import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label, FormText, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { register } from '../../actions/appActions';
import './SignUpPage';

class SingUpPage extends Component {
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
      <div className="container-fluid login-page">
        <div className="user-icon mx-auto">
          <img src={`${process.env.PUBLIC_URL}/hhch-logo.svg`} alt="His House Children's Home Logo" />
        </div>
        <h4>Create Account</h4>
        <div className="row">
          <Card className="mt-3 mx-auto">
            <CardBody className="w-small">
              <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                    name="firstName"
                    onChange={this.handleInputChange}
                    value={this.state.user.firstName} />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={this.handleInputChange}
                    value={this.state.user.lastName} />
                </FormGroup>
                <FormGroup>
                  <Label for="username">Email</Label>
                  <Input type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleInputChange}
                    value={this.state.user.email} />
                </FormGroup>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username or email"
                    name="username"
                    onChange={this.handleInputChange}
                    value={this.state.user.username} />
                </FormGroup>

                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleInputChange}
                    value={this.state.user.password}
                  />
                </FormGroup>
                <Button type="submit" block color="primary" className="mt-4">Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </div>
        <div className="row">
          <Card className="mt-3 mx-auto">
            <CardBody className="w-small">
              Already have an account?<Link to="/login"> Login</Link>
            </CardBody>
          </Card>

        </div>
      </div>
    );
  }
}

SingUpPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  register
})(SingUpPage);


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