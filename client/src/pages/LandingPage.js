import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { login, logout } from '../actions/appActions';
import BarAndMenu from '../components/BarAndMenu';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 12,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
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
    // const { auth } = this.props.app;
    const { classes } = this.props;

    return (
      <div>
        <BarAndMenu />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <Typography variant="h4" gutterBottom component="h2">
            This is where the content goes..
          </Typography>

        </main>
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