import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import BarAndMenu from '../components/BarAndMenu';
import LoginForm from '../components/LoginForm';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    alignItems: 'center',
  },

});

class Dashboard extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <BarAndMenu pageName="Login">
        <div className={classes.appBarSpacer} />
        <LoginForm />
      </BarAndMenu>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);