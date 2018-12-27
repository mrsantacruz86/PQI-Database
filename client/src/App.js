import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch as RouterSwitch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

import { toggleDrawer, login, logout, openMenu, closeMenu } from './actions/appActions';
import SignUpPage from './pages/SignUpPage';
import requireAuth from './utils/requireAuth';



const styles = theme => ({
  root: {
    display: 'flex',
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class App extends Component {

  handleMenu = event => {
    this.props.openMenu(event.currentTarget);
  };

  handleClose = () => {
    this.props.closeMenu();
  };

  handleToggleDrawer = () => {
    this.props.toggleDrawer();
  };

  handleDrawerOpen = () => {
    this.props.toggleDrawer();
  };

  handleDrawerClose = () => {
    this.props.toggleDrawer();
  };

  handleLoginClick = () => {
    this.context.router.history.push("/login");
  }

  render() {
    const { classes } = this.props;
    const notFound = () => <h1 className={classes.h1}>404: Te page is not found</h1>;

    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
            <div>
              <RouterSwitch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/dashboard" component={requireAuth(Dashboard)} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={SignUpPage} />
                <Route component={notFound} />
              </RouterSwitch>
            </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
App.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ ...state });

export default compose(
  // @ts-ignore
  withStyles(styles, {
    name: "App"
  }),
  connect(mapStateToProps, {
    toggleDrawer,
    login,
    logout,
    openMenu,
    closeMenu
  })
)(App);