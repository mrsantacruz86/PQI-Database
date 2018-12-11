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
import { Button } from '@material-ui/core';
import {connect} from 'react-redux';


class BarAndDrawer extends Component {

  handleChange = event => {
    // this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    // this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    // this.setState({ anchorEl: null });
  };

  toggleDrawer = () => {
    // this.setState({ drawerOpen: !this.state.drawerOpen });
  };


  render() {
    const { classes } = this.props;
    const { auth, drawerOpen } = this.props.app;


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
            {auth ? (
              <div>
                <IconButton
                  aria-owns={drawerOpen ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={drawerOpen}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={drawerOpen}
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
          <MainDrawer>
            open={drawerOpen}
            toggle={this.toggleDrawer}
          </MainDrawer>
        )}
      </div>
    );
  }
}

BarAndDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(BarAndDrawer) ;