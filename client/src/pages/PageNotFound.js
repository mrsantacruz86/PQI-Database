import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


class PageNotFound extends Component {

  handleClick = (e) => {
    this.context.router.history.push("/");
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>

          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                404: Pagre Not Found :(
            </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                The page that you are looking for appeard to have been moved, deleted or does not exist. You can enter a valir URL or return Home.
            </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary" onClick={this.handleClick}>
                      Main call to action
                  </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            PQI Audit Tools
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            &#169; Copyright 2018, Nelson Diaz
        </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

PageNotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};
PageNotFound.contextTypes = {
  router: PropTypes.object.isRequired
}

export default withStyles(styles)(PageNotFound);