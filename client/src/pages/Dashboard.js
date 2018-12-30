import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from '../components/SimpleLineChart';
import SimpleTable from '../components/SimpleTable';
import { compose } from 'redux';
import { connect } from 'react-redux';
import BarAndMenu from '../components/BarAndMenu';


const styles = theme => ({
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

class Dashboard extends Component {

  render() {
    const { classes } = this.props;
    return (
      <BarAndMenu pageName="Dashboard">
        <Typography variant="h4" gutterBottom component="h2">
          Orders
          </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <SimpleLineChart />
        </Typography>
        <Typography variant="h4" gutterBottom component="h2">
          Products
          </Typography>
        <div className={classes.tableContainer}>
          <SimpleTable />
        </div>
      </BarAndMenu>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ ...state });

export default compose(
  // @ts-ignore
  withStyles(styles),
  connect(mapStateToProps)
)(Dashboard);