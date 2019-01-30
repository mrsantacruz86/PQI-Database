import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import HouseAuditForm from '../components/HouseAuditForm';
import {
  getHouses,
  getHouseAudit
} from '../actions/houseAuditActions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.unit * 3
  },
  subtitle: {
    marginTop: theme.spacing.unit * 3
  },
  root: {
    // width: '100%',
    padding: theme.spacing.unit * 3,
    // overflowX: 'auto',
  },
});

class NewHouseAudit extends Component {

  componentWillMount = () => {
    this.props.getHouseAudit();
    this.props.getHouses();
  }

  render() {
    const { classes } = this.props;
    const { user } = this.props.app;
    // console.log(hItems);

    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h5">
            New House Audit
          </Typography>
          <Typography>
            {`Auditor: ${user._id} ${user.lastName}`}
          </Typography>
          <HouseAuditForm />
        </Paper>
      </div>
    );
  }
}

NewHouseAudit.propTypes = {
  classes: PropTypes.object.isRequired,
  getHouses: PropTypes.func.isRequired,
  getHouseAudit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ ...state });

export default compose(
  withStyles(styles, {
    name: "h-audits"
  }),
  connect(mapStateToProps, {
    getHouses,
    getHouseAudit
  })
)(NewHouseAudit);