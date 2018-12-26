import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch as RouterSwitch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import LoginForm from './components/LoginForm';

import { toggleDrawer, login, logout, openMenu, closeMenu } from './actions/appActions';
import RegisterForm from './components/RegisterForm';
import requireAuth from './utils/requireAuth';



const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class App extends Component {
  // state = {
  //   open: false,
  //   // auth: true,
  //   anchorEl: null
  // };

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
    const notFound = () => <h1>404: Te page is not found</h1>;

    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <main className={classes.content}>
            <div>
              <RouterSwitch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/dashboard" component={requireAuth(Dashboard)} />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <Route component={notFound} />
              </RouterSwitch>
            </div>
          </main>
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