import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

import HouseAuditForm from '../components/HouseAuditForm';
import {
  getHouses,
  getHouseAuditTemplate
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
  constructor(props) {
    super(props);
    this.state = {
      auditor: {
        name: `${this.props.app.user.firstName} ${this.props.app.user.lastName}`,
        id: this.props.app.user.id
      },
      date: moment().format('YYYY-MM-DD'),
      house: undefined,
      houseAudit: {}
    };
  };

  componentWillMount = () => {
    this.props.getHouseAuditTemplate();
    this.props.getHouses();
  }

  render() {
    const { classes } = this.props;
    const { user } = this.props.app;
    const { houseList, houseAuditTemplate } = this.props.houseAudit;
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
          <HouseAuditForm
            houseList={houseList}
            houseAuditTemplate={houseAuditTemplate}
          />
        </Paper>
      </div>
    );
  }
}

NewHouseAudit.propTypes = {
  classes: PropTypes.object.isRequired,
  getHouses: PropTypes.func.isRequired,
  getHouseAuditTemplate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ ...state });

export default compose(
  withStyles(styles, {
    name: "h-audits"
  }),
  connect(mapStateToProps, {
    getHouses,
    getHouseAuditTemplate
  })
)(NewHouseAudit);