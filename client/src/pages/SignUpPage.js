import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import RegisterForm from '../components/RegisterForm';
import BarAndMenu from '../components/BarAndMenu';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    alignItems: 'center',
  },
});

function SignUpPage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <BarAndMenu />
      <main className={classes.content}>
        <RegisterForm />
      </main>
    </div>
  );
}

SignUpPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
}

export default withStyles(styles)(SignUpPage);