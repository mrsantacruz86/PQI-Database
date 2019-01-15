import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import BarAndMenu from '../components/BarAndMenu';
import HouseAuditsTable from '../components/HouseAuditsTable';
import audits from '../utils/Audit';
// import shallowCompare from 'react-addons-shallow-compare';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 3,
  },
  root: {
    width: '100%',
    // marginTop: theme.spacing.unit,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  }
});

class HouseAudits extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {

  //   };
  // }

  // shouldComponentUpdate = function(nextProps, nextState) {
  //   return shallowCompare(this, nextProps, nextState);
  // }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <BarAndMenu pageName="House Audit">
          <Paper className={classes.root}>
            <Button variant="contained" color="secondary" className={classes.button} href="/house-audits/new">New Audit</Button>
            <HouseAuditsTable data={audits}/>
          </Paper>
        </BarAndMenu>
      </div>
    );
  }
}

HouseAudits.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ ...state });

export default compose(
  // @ts-ignore
  withStyles(styles, {
    name: "h-audits"
  }), connect(mapStateToProps)
)(HouseAudits);