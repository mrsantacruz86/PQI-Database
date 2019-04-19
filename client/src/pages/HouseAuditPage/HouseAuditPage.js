import React from 'react';
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
import DataTable from "../../components/DataTable";
import MainFrame from "../../components/MainFrame";
import { Button, Form, FormGroup, Input, Label, FormText, Card, CardBody, CardTitle } from 'reactstrap';
import './HouseAuditPage.css';

class HouseAuditPage extends React.Component {

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { auth } = this.props.app;
    return (
      <div>
        <MainFrame />
        <Card>
          <CardBody>
            <CardTitle><h5>House Audit</h5></CardTitle>
            <Button color="primary" className="mb-3 mr-1">New Audit</Button>
            <Button color="primary" className="mb-3 mr-1">Generate Report</Button>
            <DataTable></DataTable>
          </CardBody>

        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {

})(HouseAuditPage);