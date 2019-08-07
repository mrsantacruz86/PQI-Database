import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchHouseAudits } from '../../actions/houseAuditActions';
import Spinner from '../Spinner';
import moment from 'moment';

import { houseAuditItems } from './houseAudits.json';

class HouseAuditsList extends Component {
  componentDidMount() {
    this.props.fetchHouseAudits();
  }

  render() {
    return (
      <div>
        <h1>HouseAuditsList</h1>
        <div>
          <Link className="btn btn-primary" to="/houseaudits/new">
            Create audit
          </Link>
        </div>
        <div className="my-3">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Date</th>
                <th scope="col">House</th>
                <th scope="col">Dept.</th>
                {houseAuditItems.map((item, index) => (
                  <th key={index} scope="col">
                    {item.label}
                  </th>
                ))}
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {!this.props.houseAudits ? (
                <Spinner />
              ) : (
                this.props.houseAudits.map(audit => (
                  <tr key={audit._id}>
                    <td>{audit._id}</td>
                    <td>{moment(audit.date).format('MM/DD/YYYY')}</td>
                    <td>{audit.house}</td>
                    <td>{audit.department}</td>
                    {houseAuditItems.map((item, index) => (
                      <td key={index}>
                        {!audit.items[item.name] ? '' : audit.items[item.name].score}%
                      </td>
                    ))}
                    <td>{audit.score}%</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    houseAudits: Object.values(state.houseAudits)
  };
};
export default connect(
  mapStateToProps,
  {
    fetchHouseAudits
  }
)(HouseAuditsList);
