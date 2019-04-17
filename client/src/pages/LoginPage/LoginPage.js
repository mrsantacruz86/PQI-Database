import React from 'react';
import { Redirect } from "react-router-dom";
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
      <React.Fragment>
        <div className="login-page">
          <div className="user-icon mx-auto">
            <img src={`${process.env.PUBLIC_URL}/hhch-logo.svg`} alt="His House Children's Home Logo" />
          </div>
          <h3>Sign in to PQI Tools</h3>
          <div className="row">
            <Card className="mx-auto">
              <CardBody outline>
                <Form onSubmit={this.handleSubmit}>
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
                  <Button type="submit" className="btn btn-primary flex-fill mx-auto">Sign in</Button>
                </Form>
              </CardBody>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  login
})(LoginPage);