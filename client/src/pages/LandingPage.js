import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { login, logout } from '../actions/appActions';
import BarAndMenu from '../components/BarAndMenu';
import SimpleLineChart from '../components/SimpleLineChart';
import SimpleTable from '../components/SimpleTable';

const styles = theme => ({
  root: {
    display: 'flex',
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
        <BarAndMenu pageName="Landing Page">
          <Typography variant="h4" gutterBottom component="h2">
            This is where the content goes...
          </Typography>          
        </BarAndMenu>
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