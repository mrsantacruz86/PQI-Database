import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, Form } from 'react-final-form';
import { register } from '../actions/authActions';

const SignUpPage = props => {
  const onSubmit = values => {
    props.register(values);
    alert('Account successfully created!');
  };

  if (props.isSignedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page min-vh-100 min-vw-100">
      <div className="user-icon text-primary mx-auto">
        <i className="fas fa-user-circle" />
      </div>
      <h2>Sign in</h2>
      <div className="row">
        <div className="card mt-3 mx-auto">
          <div className="card-body w-small">
            <Form
              onSubmit={onSubmit}
              // validate={values => {
              //   const errors = {};
              //   const requiredFields = ['firstName', 'lastName', 'username', 'email', 'password'];
              //   requiredFields.forEach(field => {
              //     if (!values[field]) {
              //       errors[field] = 'Required';
              //     }
              //   });
              //   if (
              //     values.email &&
              //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              //   ) {
              //     errors.email = 'Invalid email address';
              //   }
              //   return errors;
              // }}
            >
              {({ handleSubmit, form, pristine, submitting, values }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      className="form-control"
                      component="input"
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      className="form-control"
                      component="input"
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      className="form-control"
                      component="input"
                      name="email"
                      placeholder="Email"
                      type="text"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="username">Username or email</label>
                    <Field
                      className="form-control"
                      component="input"
                      name="username"
                      placeholder="Username"
                      type="text"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      className="form-control"
                      component="input"
                      placeholder="Password"
                      name="password"
                    />
                  </div>

                  <div className="buttons mt-3 d-flex justify-content-center">
                    <button
                      className="btn btn-primary mr-3"
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Sign up
                    </button>
                    <button
                      className="btn btn-secondary mr-3"
                      type="button"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                    </button>
                  </div>
                  {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                </form>
              )}
            </Form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card mt-3 mx-auto">
          <div className="card-body w-small">
            Already have an account?
            <br />
            <Link to="/login">Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(
  mapStateToProps,
  {
    register
  }
)(SignUpPage);
