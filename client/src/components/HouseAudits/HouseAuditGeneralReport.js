import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Table } from 'react-bootstrap';

import { fetchHouseAudits } from '../../actions/houseAuditActions';
import Spinner from '../Spinner';
import moment from 'moment';
import template from './houseAudits.json';
import BarChart from '../BarChart';

import { sortByParam } from '../../utils/numbers';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  }
];

class HouseAuditsGeneralReport extends Component {
  componentDidMount() {
    this.props.fetchHouseAudits();
  }
  renderRows = () => {
    return !this.props.houseAudits ? (
      <Spinner />
    ) : (
      this.props.houseAudits.map(audit => (
        <tr key={audit._id}>
          <td>{moment(audit.date).format('MM/DD/YYYY')}</td>
          <td>{audit.house}</td>
          <td>{audit.department}</td>
          {template.houseAuditItems.map((item, index) => (
            <td key={index}>{!audit.items[item.name] ? '' : audit.items[item.name].score}%</td>
          ))}
          <td>{audit.score}%</td>
        </tr>
      ))
    );
  };

  render() {
    return (
      <Container fluid>
        <div className="py-2" />
        <h3 className="py-2">House Audits General Report</h3>
        <div className="my-3">
          <Link className="btn btn-primary" to="/houseaudits">
            <i className="fas fa-chevron-left" /> Go back to List
          </Link>
        </div>

        <section className="chart my-3">
          <BarChart data={data} />
        </section>

        <section className="mt-3">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>House</th>
                <th>Program</th>
                {template.houseAuditItems.map((item, index) => (
                  <th key={`th-${index}`}>{item.label}</th>
                ))}
                <th>Score</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </Table>
        </section>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
  houseAudits: sortByParam(Object.values(state.houseAudits), 'house', false)
});

export default connect(
  mapStateToProps,
  {
    fetchHouseAudits
  }
)(HouseAuditsGeneralReport);
