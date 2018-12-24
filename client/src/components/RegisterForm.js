import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import AccountCircleSharp from '@material-ui/icons/AccountCircleSharp';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Field, reduxForm } from 'redux-form';
import { register } from '../actions/appActions';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

//Validation
const validate = values => {
  const errors = {}
  const requiredFields = [
    "firstName",
    "lastName",
    "username",
    "email",
    "password"
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
};


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
    this.props.register(this.state);
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
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleSharp />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create account
        </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit} >
            <TextField
              id="firstName"
              type="text"
              required
              name="firstName"
              onChange={this.handleInputChange}
              label="First Name"
              margin="normal"
              value={this.state.user.firstName}
              fullWidth
            />
            <TextField
              id="lastName"
              type="text"
              required
              name="lastName"
              onChange={this.handleInputChange}
              label="Last Name"
              margin="normal"
              value={this.state.user.lastName}
              fullWidth
            />
            <TextField
              id="username"
              type="text"
              required
              name="username"
              onChange={this.handleInputChange}
              label="Username"
              value={this.state.user.username}
              fullWidth
              margin="normal"
            />
            <TextField
              id="email"
              type="text"
              required
              name="email"
              onChange={this.handleInputChange}
              label="Email"
              value={this.state.user.email}
              fullWidth
              margin="normal"
            />
            <TextField
              id="password"
              type="password"
              required
              name="password"
              onChange={this.handleInputChange}
              label="Password"
              value={this.state.user.password}
              fullWidth
              margin="normal"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
          </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ ...state });

export default compose(
  // @ts-ignore
  withStyles(styles, {
    name: "Reg"
  }),
  connect(mapStateToProps, {
    register
  })
)(RegisterForm);