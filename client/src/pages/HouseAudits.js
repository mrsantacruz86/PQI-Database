import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import audits from '../utils/AuditItems';
import moment from 'moment';
import shortid from 'shortid';
import { percentage } from '../utils/numbers';

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

  render() {
    const { classes } = this.props;

    return (
      <div>
        <BarAndMenu pageName="House Audit">
          <Paper className={classes.root}>
            <Button variant="contained" color="secondary" className={classes.button} href="/house-audits/new">New Audit</Button>
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
                {audits.map(audit => {
                  const hPass = audit.houseAudit.filter(auditItem => auditItem.value);
                  const hTotal = hPass.length / audit.houseAudit.length;
                  const mPass = audit.facilitiesAudit.filter(auditItem => auditItem.value);
                  const mTotal = mPass.length / audit.facilitiesAudit.length;
                  const id = shortid.generate();
                  return (
                    <TableRow hover className={classes.row} key={id}>
                      <TableCell scope="row">Icon</TableCell>
                      <TableCell align="right">{id}</TableCell>
                      <TableCell align="right">{moment(audit.date).format("MM/DD/YYYY")}</TableCell>
                      <TableCell align="right">{audit.house}</TableCell>
                      <TableCell align="right">{`${percentage(hTotal)}%`}</TableCell>
                      <TableCell align="right">{`${percentage(mTotal)}%`}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
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