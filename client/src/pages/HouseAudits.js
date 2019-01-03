import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BarAndMenu from '../components/BarAndMenu';

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
});

class HouseAudits extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {

  //   };
  // }

  render() {
    // const { auth } = this.props.app;
    const { classes } = this.props;

    return (
      <div>
        <BarAndMenu pageName="House Audit">
          <Paper className={classes.root}>
            <Button variant="contained" color="secondary" className={classes.button}>New Audit</Button>
            <Table /* className={classes.table} */>
              <TableHead>
                <TableRow>
                  <TableCell component="th">Icon</TableCell>
                  <TableCell component="th">ID</TableCell>
                  <TableCell component="th">Date</TableCell>
                  <TableCell component="th">House</TableCell>
                  <TableCell component="th">Residential</TableCell>
                  <TableCell component="th">Maintenance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map(row => {
                  return ( */}
                <TableRow key={1123321321}>
                  <TableCell scope="row">Icon</TableCell>
                  <TableCell align="right">251032362044569</TableCell>
                  <TableCell align="right">02/22/1986</TableCell>
                  <TableCell align="right">35</TableCell>
                  <TableCell align="right">98%</TableCell>
                  <TableCell align="right">93%</TableCell>
                </TableRow>
                {/* );
                })} */}
              </TableBody>
            </Table>
          </Paper>
        </BarAndMenu>
      </div>
    );
  }
}

// HouseAudits.propTypes = {
//   classes: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({ ...state });

export default compose(
  withStyles(styles, {
    name: "h-audits"
  }), connect(mapStateToProps)
)(HouseAudits);