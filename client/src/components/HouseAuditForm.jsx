import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import moment from 'moment';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import {
  saveHouseAudit,
} from '../actions/houseAuditActions';

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
  }
});

class HouseAuditForm extends Component {
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
  handleSelectAll = () => {

  };

  handleSubmit = (e) => {
    e.preventDefault();
    const hAudit = { ...this.state };
    this.props.saveHouseAudit(hAudit);
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSelect = (e) => {
    e.preventDefault();
    const audit = { ...this.state.houseAudit };
    audit[e.target.value] = e.target.checked;
    this.setState({ houseAudit: audit });
  }

  render() {
    const { classes } = this.props;
    const { houseList, houseAuditTemplate } = this.props.houseAudit;
    // console.log(hItems);

    return (
      <div>
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
            {houseList.map((house, index) => (
              <MenuItem key={index} value={house.number}>
                {house.number}
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="h6" className={classes.subtitle}>
            Household Audit
          </Typography>
          <Checkbox
            value={"ssdfsdf"}
            checked={false}
            onChange={this.handleSelectAll}
          />
          {/* <FormLabel component="legend">Household Audit</FormLabel> */}
          <hr />
          <Grid container>
            {/* {console.log(houseAuditTemplate)} */}
            {!(houseAuditTemplate.length > 0) ?
              <LinearProgress color="secondary" />
              :
              houseAuditTemplate.map(item => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.itemId}>
                  <FormControl fullWidth /* component="fieldset" */ className={classes.formControl} >
                    <FormControlLabel
                      control={
                        <div>
                          <Checkbox
                            checked={this.state.houseAudit[item.name]}
                            value={item.name}
                            onChange={this.handleSelect}
                          />
                          <IconButton aria-label="Comments">
                            <CommentIcon />
                          </IconButton>
                        </div>
                      }
                      label={item.label}
                    />
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
      </div>
    );
  }
}

HouseAuditForm.propTypes = {
  classes: PropTypes.object.isRequired,
  houseList: PropTypes.array.isRequired,
  houseAuditTemplate: PropTypes.array.isRequired,
  saveHouseAudit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ ...state });

export default compose(
  // @ts-ignore
  withStyles(styles, {
    name: "h-audits"
  }),
  connect(mapStateToProps, {
    saveHouseAudit
  })
)(HouseAuditForm);