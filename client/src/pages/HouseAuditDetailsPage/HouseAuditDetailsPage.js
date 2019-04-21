import React from 'react';
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
// import { Button, Form, FormGroup, Input, Label, FormText, Card, CardBody } from 'reactstrap';
import './HouseAuditDetailsPage.css';

class HouseAuditDetailsPage extends React.Component {

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
        <h3 >House Audit Details Form</h3>
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {

})(HouseAuditDetailsPage);