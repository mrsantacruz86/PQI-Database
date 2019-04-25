import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle } from 'reactstrap';
import AuditItem from "../AuditItem";
import "./AuditDetails.scss";

export default class AuditDetails extends Component {
  static propTypes = {
    view: PropTypes.oneOf(["new", "edit", "read-only"]),
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle><h5>Audit Details</h5></CardTitle>
            <AuditItem checkType="checkbox" name="Item">Item</AuditItem>
          </CardBody>
        </Card>
      </div>
    )
  }
}

