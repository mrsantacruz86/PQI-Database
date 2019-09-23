import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import { fetchHouseAudits } from '../../actions/houseAuditActions';
import Spinner from '../Spinner';
// import moment from 'moment';

import CollapseRow from './CollapseRow';
class HouseAuditsList extends Component {
  componentDidMount() {
    this.props.fetchHouseAudits();
  }

  renderList = () => {
    return !this.props.houseAudits ? (
      <Spinner />
    ) : (
      this.props.houseAudits.map(audit => <CollapseRow data={audit}></CollapseRow>)
    );
  };
  render() {
    return (
      <Container fluid>
        <div className="py-2" />
        <h3 className="py-2">House Audits</h3>
        <div>
          <Link className="btn btn-primary" to="/houseaudits/new">
            <i className="fas fa-plus" /> New Audit
          </Link>
        </div>

        <div className="my-3">
          <section className="mt-3">
            <Row className="px-4 py-0">
              <Col>Date</Col>
              <Col>House</Col>
              <Col>Dept.</Col>
              <Col>Auditors</Col>
              <Col>Total</Col>
            </Row>
          </section>

          <section>{this.renderList()}</section>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
  houseAudits: Object.values(state.houseAudits)
});

export default connect(
  mapStateToProps,
  {
    fetchHouseAudits
  }
)(HouseAuditsList);
