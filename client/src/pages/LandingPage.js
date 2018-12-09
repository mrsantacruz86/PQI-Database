import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import MainDrawer from '../components/MainDrawer';
import { FormGroup, FormControlLabel, Switch, Button } from '@material-ui/core';

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
    // marginLeft: theme.spacing.unit,
  },
  titleAlone: {
    flexGrow: 1,
    marginLeft: 36
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
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class LandingPage extends Component {
  state = {
    DrawerOpen: false,
    auth: true,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
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
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const DrawerOpen = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.DrawerOpen && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.DrawerOpen} className={classes.toolbar}>
            {auth && (
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.toggleDrawer}
                className={classNames(
                  classes.menuButton,
                  this.state.DrawerOpen && classes.menuButtonHidden,
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
              className={this.state.DrawerOpen ? classes.title : classes.titleAlone}
            >
              Welcome Audit Tools
            </Typography>
            {auth ? (
              <div>
                <IconButton
                  aria-owns={DrawerOpen ? 'menu-appbar' : undefined}
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
                  open={DrawerOpen}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>)
              :
              (<Button color="inherit" component={Link} to="/login"
              >
                Login
              </Button>)
            }
          </Toolbar>
        </AppBar>
        {auth && (
          <MainDrawer
            open={this.state.DrawerOpen}
            toggle={this.toggleDrawer}
          />
        )}

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

// @ts-ignore
export default withStyles(styles)(LandingPage);