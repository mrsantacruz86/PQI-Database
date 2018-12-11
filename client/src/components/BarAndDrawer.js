import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import MainDrawer from './MainDrawer';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { toggleDrawer, openMenu, closeMenu } from '../actions/appActions';


class BarAndDrawer extends Component {

  handleChange = event => {
    // this.setState({ auth: event.target.checked });
  };

  handleMenu = target => {
    this.props.app.openMenu(target);
  };

  handleClose = () => {
    this.props.app.closeMenu();
  };

  toggleDrawer = () => {
    this.props.app.toggleDrawer();
  };


  render() {
    const { auth, drawerOpen, anchorEl, classes } = this.props.app;
    const openMenu = Boolean(anchorEl);


    return (
      <div className="MainAppBar">
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, drawerOpen && classes.appBarShift)}
        >
          <Toolbar disableGutters={!drawerOpen} className={classes.toolbar}>
            {auth && (
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.toggleDrawer}
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
              className={drawerOpen ? classes.title : classes.titleAlone}
            >
              Welcome Audit Tools
            </Typography>
            {auth.access ? (
              <div>
                <IconButton
                  aria-owns={openMenu ? 'menu-appbar' : undefined}
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
                  open={openMenu}
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
            open={drawerOpen}
            toggle={this.toggleDrawer}
          />
        )}
      </div>
    );
  }
}

BarAndDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  toggleDrawer,
  openMenu,
  closeMenu
})(BarAndDrawer);