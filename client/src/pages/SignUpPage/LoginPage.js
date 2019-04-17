import React from 'react';
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from "../../actions/appActions";
import { Button, Form, FormGroup, Input, Label, FormText, Card, CardBody } from 'reactstrap';
import './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.credentials);
    this.setState({
      credentials: {
        username: "",
        password: ""
      }
    })
  };

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
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
      // <React.Fragment>
        <div className="container-fluid login-page">
          <div className="user-icon mx-auto">
            <img src={`${process.env.PUBLIC_URL}/hhch-logo.svg`} alt="His House Children's Home Logo" />
          </div>
          <h4>Sign in to PQI Tools</h4>
          <div className="row">
            <Card className="mt-3 mx-auto">
              <CardBody className="w-small">
                <Form onSubmit={this.handleSubmit} >
                  <FormGroup>
                    <Label for="username">Username or email</Label>
                    <Input type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username or email"
                      name="username"
                      onChange={this.handleInputChange}
                      value={this.state.credentials.username} />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleInputChange}
                      value={this.state.credentials.password}
                    />
                  </FormGroup>
                  <Button type="submit" className="btn btn-primary mt-4 btn-block">Sign in</Button>
                </Form>
              </CardBody>
            </Card>
          </div>
          <div className="row">
            <Card className="mt-3 mx-auto">
              <CardBody className="w-small">
                New here?<Link to="/register"> Create an account</Link>
              </CardBody>
            </Card>

          </div>
        </div>
      // </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  login
})(LoginPage);