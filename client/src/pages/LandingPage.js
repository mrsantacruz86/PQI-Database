import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import BarAndDrawer from '../components/BarAndDrawer';
import Typography from '@material-ui/core/Typography';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { login, logout } from '../actions/appActions';

class LandingPage extends Component {

  handleChange = () => {
    if (this.props.app.auth) {
      this.props.app.logout();
    } else {
      this.props.app.login();
    }
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleDrawer = () => {
    this.setState({ DrawerOpen: !this.state.DrawerOpen });
  };


  render() {
    const { auth, classes } = this.props.app;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <BarAndDrawer />

        <main className={classes.content}>
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

        </main>
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ ...state });

// @ts-ignore
export default connect(mapStateToProps, {
  login,
  logout
}
)(LandingPage);