import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { login } from '../actions/appActions';

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
    // console.log(this.state.user);
    e.preventDefault();
    this.props.login(this.state.user);
    this.setState({
      user: {
        username: "",
        password: ""
      }
    })
    // this.context.router.history.push("/");
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
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <TextField
              id="username"
              type="text"
              required
              name="username"
              onChange={this.handleInputChange}
              label="Last Name"
              margin="normal"
              value={this.state.user.username}
              fullWidth
            />
            <TextField
              id="password"
              type="password"
              required
              name="password"
              onChange={this.handleInputChange}
              label="Password"
              margin="normal"
              value={this.state.user.password}
              fullWidth
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
          </Button>
          </form>
        </Paper>
      </main>
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

export default compose(
  // @ts-ignore
  withStyles(styles, {
    name: "Reg"
  }),
  connect(mapStateToProps, {
    login
  })
)(LoginForm);