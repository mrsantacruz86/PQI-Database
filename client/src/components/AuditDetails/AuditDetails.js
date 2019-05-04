// House Audit Details form

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, CardBody, CardTitle, CardText, Label, Form, FormGroup, Input, Button } from 'reactstrap';
import AuditItem from "../AuditItem";
import moment from 'moment';
import "./AuditDetails.scss";
import { handleInputChange } from '../../actions/houseAuditActions';

class AuditDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cottage: "",
      auditor: "",
      date: moment(Date.now()).format("MM/DD/YYYY"),
      auditItems: []
    }
  }
  static propTypes = {
    view: PropTypes.oneOf(["new", "edit", "read-only"]),
  }

  handleInputChange = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.handleInputChange([target.name], value);
  }

  render() {
    const { cottage, auditor, date, auditItems } = this.props.houseAudit;
    const { houseList } = this.props.houses
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle><h5>Audit Details</h5></CardTitle>
            <CardText>
              <Form>
                <FormGroup>
                  <Label for="cottage">Cottage</Label>
                  <Input type="select" id="cottage" name="cottage" value={cottage} onChange={this.handleInputChange}>
                    {houseList.map(h =>
                      <option>{h}</option>
                    )}

                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="auditor">Auditor</Label>
                  <Input type="text" id="auditor" name="auditor" value={auditor} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="date">Date</Label>
                  <Input type="date" id="date" name="date" value={date} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  {auditItems.map((item, index) =>
                    <AuditItem
                      key={index}
                      index={index}
                      item={item}
                    />
                  )}
                </FormGroup>
              </Form>
            </CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {
  handleInputChange
})(AuditDetails);