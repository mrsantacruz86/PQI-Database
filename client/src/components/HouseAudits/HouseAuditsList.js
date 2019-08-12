import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchHouseAudits } from '../../actions/houseAuditActions';
import Spinner from '../Spinner';
import moment from 'moment';

import { houseAuditItems } from './houseAudits.json';

class HouseAuditsList extends Component {
  componentWillMount() {
    this.props.fetchHouseAudits();
  }

  renderList = () => {
    // console.log(JSON.stringify(this.props.houseAudits, '', 2));
    return !this.props.houseAudits ? (
      <Spinner />
    ) : (
      this.props.houseAudits.map(audit => (
        <tr key={audit._id}>
          {/* <td>{audit._id}</td> */}
          <td>{moment(audit.date).format('MM/DD/YYYY')}</td>
          <td>{audit.house}</td>
          <td>{audit.department}</td>
          {houseAuditItems.map((item, index) => (
            <td key={index}>{!audit.items[item.name] ? '' : audit.items[item.name].score}%</td>
          ))}
          <td>{audit.score}%</td>
          <td className="d-flex justify-content-around">
            <Link to={`/houseaudits/edit/${audit._id}`}>
              <i className="fas fa-pencil-alt text-warning" />
            </Link>
            <Link to={`/houseaudits/delete/${audit._id}`}>
              <i className="fas fa-trash-alt text-danger" />
            </Link>
          </td>
        </tr>
      ))
    );
  };
  render() {
    return (
      <div className="container-fluid">
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
                {/* <th scope="col">Id</th> */}
                <th scope="col">Date</th>
                <th scope="col">House</th>
                <th scope="col">Dept.</th>
                {houseAuditItems.map((item, index) => (
                  <th key={index} scope="col">
                    {item.label}
                  </th>
                ))}
                <th scope="col">Total</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  houseAudits: Object.values(state.houseAudits)
});

export default connect(
  mapStateToProps,
  {
    fetchHouseAudits
  }
)(HouseAuditsList);
