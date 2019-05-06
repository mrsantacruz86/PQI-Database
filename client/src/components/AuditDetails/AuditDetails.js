// House Audit Details form

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, CardBody, CardTitle, CardText, Label, Form, FormGroup, Input, CustomInput, Button, Col, Row } from 'reactstrap';
import AuditItem from "../AuditItem";
import moment from 'moment';
import "./AuditDetails.scss";
import { handleInputChange } from '../../actions/houseAuditActions';

const auditors = [
  { name: "Nelson Diaz", id: "5c2065491223ff3a58880237" },
  { name: "Paul Miret", id: "5cce01b9eb843b1985de850e" }
]

class AuditDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auditor: {
        name: "Nelson Diaz",
        id: this.props.app.user._id
      },
      date: moment(Date.now()).format("MM/DD/YYYY")
    }
  }
  static propTypes = {
    view: PropTypes.oneOf(["new", "edit", "read-only"]),
  }

  handleInputChange = e => {
    e.preventDefault();
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.handleInputChange([target.name], value);
  }
  saveHouseAudit = e => {
    e.preventDefault();
    const audit = this.props.houseAudit;
    this.props.saveHouseAudit(audit);
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
              <Form onSubmit={this.saveHouseAudit}>
                <Row>
                  <Col sm={2}>
                    <FormGroup>
                      <Label for="cottage">Cottage</Label>
                      <CustomInput
                        type="select"
                        id="cottage"
                        name="cottage"
                        value={cottage}
                        onChange={this.handleInputChange}
                      >
                        {houseList.map(h =>
                          <option>{h}</option>
                        )}
                      </CustomInput>
                    </FormGroup>
                  </Col>
                  <Col sm={8}>
                    <FormGroup>
                      <Label for="auditor">Auditor</Label>
                      <CustomInput
                        type="select"
                        id="auditor"
                        name="auditor"
                        value={auditor}
                        onChange={this.handleInputChange}
                      >
                        {auditors.map(item =>
                          <option value={item.id}>{item.name}</option>
                        )}
                      </CustomInput>
                    </FormGroup>
                  </Col>
                  <Col sm={2}>
                    <FormGroup>
                      <Label for="date">Date</Label>
                      <Input type="date" id="date" name="date" value={date} onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Row>
                    {auditItems.map((item, index) =>
                    <Col lg={3} md={6} sm={12}>
                      <AuditItem
                        key={index}
                        index={index}
                        item={item}
                      />
                    </Col>
                    )}
                  </Row>
                </FormGroup>
                <Button onClick={this.saveHouseAudit}>Submit</Button>
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