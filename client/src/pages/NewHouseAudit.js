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

// import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import {
  getHouses,
  createAudit,
  getHouseAuditTemplate
} from '../actions/houseAuditActions';
import items from '../utils/Items'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3

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
  subtitle: {
    marginTop: theme.spacing.unit * 3
  },
  root: {
    // width: '100%',
    padding: theme.spacing.unit * 3,
    // overflowX: 'auto',
  },
  formControl: {
    // margin: theme.spacing.unit,
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
      houseAudit: {}
    };
  }
  componentDidMount = () => {
    this.props.getHouseAuditTemplate();
    this.props.getHouses();
    // console.log("Mounted")
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const hAudit = {

    }
    this.props.createAudit();
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSelect = (e) => {
    const audit = { ...this.state.houseAudit };
    audit[e.target.value] = e.target.checked;
    this.setState({ houseAudit: audit });
  }

  render() {
    const { classes } = this.props;
    const { houseList, currentAudit } = this.props.houseAudit;
    const { user } = this.props.app;

    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h5">
            New House Audit
          </Typography>
          <Typography>
            {`Auditor: ${user._id} ${user.lastName}`}
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
              {houseList.map(option => (
                <MenuItem key={option.number} value={option.number}>
                  {option.number}
                </MenuItem>
              ))}
            </TextField>
            <Typography variant="h6" className={classes.subtitle}>
              Household Audit
            </Typography>
            {/* <FormLabel component="legend">Household Audit</FormLabel> */}
            <hr />
            <Grid container>
              {currentAudit.items.map(item => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.itemId}>
                  <FormControl fullWidth /* component="fieldset" */ className={classes.formControl} >
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox checked={this.state.houseAudit[item.name]} value={item.name} onChange={this.handleSelect} />
                        }
                        label={item.label}
                      />
                    </FormGroup>
                    {/* <FormHelperText>Be careful</FormHelperText>  */}
                  </FormControl>
                </Grid>

              ))}
            </Grid>


            <Typography variant="h6" className={classes.subtitle} >
              Maintenance Audit
            </Typography>
            <hr />
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
  classes: PropTypes.object.isRequired,
  getHouses: PropTypes.func.isRequired,
  getHouseAuditTemplate: PropTypes.func.isRequired,
  createAudit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ ...state });

export default compose(
  // @ts-ignore
  withStyles(styles, {
    name: "h-audits"
  }),
  connect(mapStateToProps, {
    getHouses,
    createAudit,
    getHouseAuditTemplate
  })
)(NewHouseAudit);