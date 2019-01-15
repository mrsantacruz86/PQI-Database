import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import shortid from 'shortid';
import { percentage } from '../utils/numbers';

const styles = {
  table: {
    minWidth: 700,
  },
};

function SimpleTable(props) {
  const { classes } = props;

  return (
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
        {props.data.map(audit => {
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
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};
export default withStyles(styles)(SimpleTable);