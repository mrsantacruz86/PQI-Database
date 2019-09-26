import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown } from 'react-bootstrap';

import { fetchHouseAudits } from '../../actions/houseAuditActions';
import { toggleModal } from '../../actions/appActions';
import Spinner from '../Spinner';
import moment from 'moment';

import { houseAuditItems } from './houseAudits.json';
import { sortByParam } from '../../utils/numbers';

class HouseAuditsList extends Component {
  componentDidMount() {
    this.props.fetchHouseAudits();
  }
  toggleModal = () => {
    this.props.toggleModal();
  };

  renderList = () => {
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
          <td className="d-flex justify-content-around align-items-center">
            <Dropdown alignRight className="recordActions">
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                <i className="fas fa-ellipsis-v text-secondary" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} exact to={`/houseaudits/show/${audit._id}`}>
                  <i className="fas fa-file-invoice mr-2 text-secondary" />
                  {`\t Details`}
                </Dropdown.Item>
                <Dropdown.Item as={Link} exact to={`/houseaudits/edit/${audit._id}`}>
                  <i className="fas fa-pencil-alt mr-2 text-secondary" />
                  {`\t Edit`}
                </Dropdown.Item>
                <Dropdown.Item as={Link} exact to={`/houseaudits/delete/${audit._id}`}>
                  <i className="fas fa-trash-alt mr-2 text-secondary" />
                  {`\t Delete`}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </td>
        </tr>
      ))
    );
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="py-2" />
        <h3 className="py-2">House Audits</h3>
        <div>
          <Link className="btn btn-primary" to="/houseaudits/new">
            <i className="fas fa-plus" /> New Audit
          </Link>
        </div>
        <div className="my-3">
          <table className="table table-striped table-responsive-md table-hover">
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
          {/* {this.props.app.modalOpen ? <HouseAuditDelete {...this.props} /> : ''} */}
        </div>
      </div>
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
    fetchHouseAudits,
    toggleModal
  }
)(HouseAuditsList);
