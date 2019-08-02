import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchHouseAudits } from '../../actions/houseAuditActions';

const HouseAuditsList = props => {
  useEffect(() => {
    props.fetchHouseAudits();
  }, []);

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
              {props.houseAudits.map(audit => (
                <th scope="col">id</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

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
