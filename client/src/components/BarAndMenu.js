import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from '../components/listItems';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

import { toggleDrawer, login, logout, openMenu, closeMenu } from '../actions/appActions';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  noAuthTitle: {
    flexGrow: 1,
    paddingLeft: theme.spacing.unit * 3
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
  grow: {
    flexGrow: 1,
  }
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

  goToLogin = () => {
    this.context.router.history.push("/");
  };

  render() {
    const { classes } = this.props;
    const { auth, drawerOpen, anchorEl } = this.props.app;
    const open = Boolean(anchorEl);

    return (
      <div >
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, drawerOpen && classes.appBarShift)}
        >
          <Toolbar disableGutters={!drawerOpen} className={classes.toolbar}>
            {auth && (
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  drawerOpen && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={auth ? classes.title : classes.noAuthTitle}
            >
              Home
            </Typography>
            {auth ?
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.props.logout}>Log Out</MenuItem>
                </Menu>
              </div>
              :
              <Button color="inherit" onClick={this.goToLogin}>Login</Button>
            }
          </Toolbar>
        </AppBar>
        {auth && (
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose),
            }}
            open={drawerOpen}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
          </Drawer>
        )}


      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  // auth: PropTypes.Boolean.isRequired, 
  // drawerOpen: PropTypes.Boolean.isRequired, 
  // anchorEl: PropTypes.object
};
App.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ ...state });

export default compose(
  withStyles(
    // @ts-ignore
    styles,
    { withTheme: true }
  ),
  connect(mapStateToProps, {
    toggleDrawer,
    login,
    logout,
    openMenu,
    closeMenu
  })
)(App);