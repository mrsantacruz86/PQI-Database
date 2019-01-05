import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

import moment from 'moment';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 3
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.unit * 3
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  root: {
    // width: '100%',
    padding: theme.spacing.unit * 3,
    // overflowX: 'auto',
  }
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

    };
  }

  handleSubmit = () => {
    return null;
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { classes } = this.props;
    const {houseList} = this.props.houseAudit;

    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h5">
            New House Audit
          </Typography>
          <Typography>
            {`Auditor: ${this.props.app.user.firstName} ${this.props.app.user.lastName}`}
          </Typography>
          <form onSubmit={this.handleSubmit} >
            <TextField
              required
              name="date"
              type="date"
              id="audit-date"
              label="Audit Date"
              value={this.state.date}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              required
              select
              name="house"
              id="house"
              label="House Number"
              value={this.state.house}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange}
              InputLabelProps={{ shrink: true }}
              SelectProps={{
                // native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
            >
            {houseList.map( option =>(
              <MenuItem key={option.number} value={option.number}>
                {option.number}
              </MenuItem>
            ))}
            </TextField>

            {/* <TextField
              required
              name="house"
              id="house"
              label="House Number"
              value={this.state.house}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange}
            /> */}
            <Grid
              container
              spacing={24}
              justify="flex-end"
            >
              <Button
                type="reset"
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classNames(classes.submit, classes.button)}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Paper>
      </div>
    );
  }
}

NewHouseAudit.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ ...state });

export default compose(
  withStyles(styles, {
    name: "h-audits"
  }), connect(mapStateToProps)
)(NewHouseAudit);