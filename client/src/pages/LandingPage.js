import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { login, logout } from '../actions/appActions';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  chartContainer: {
    marginLeft: -22,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class LandingPage extends Component {

  handleChange = () => {
    if (this.props.app.auth) {
      this.props.logout();
    } else {
      this.props.login();
    }
  };

  render() {
    const { auth } = this.props.app;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.appBarSpacer} />
        <Typography variant="h4" gutterBottom component="h2">
          This is where the content goes...

            <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
              }
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup>
        </Typography>
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ ...state });

export default compose(
  withStyles(styles, {
    name: "App"
  }),
  connect(mapStateToProps, {
    login,
    logout,
  })
)(LandingPage);