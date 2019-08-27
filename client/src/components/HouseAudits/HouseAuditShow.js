import React, { useEffect } from 'react';
import history from '../../history';
import { connect } from 'react-redux';
import moment from 'moment';

import Spinner from '../Spinner';
import { fetchHouseAudit } from '../../actions/houseAuditActions';

const HouseAuditShow = props => {
  useEffect(() => {
    props.fetchHouseAudit(props.match.params.id);
  }, []);
  // console.log(props.houseAudit.house);
  if (!props.houseAudit) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="py-2 .d-print-none"></div>
      {/* Extra line not visible when printing */}
      <div className="report-frame">
        <div className="d-flex justify-content-start align-items-center">
          <div className="px-5">
            <img src="../../hhch-logo.svg" width={150} alt="His House Children's Home Logo" />
          </div>
          <div className="px-5 text-left">
            <h1 className="display-4">HOUSE AUDIT REPORT</h1>
          </div>
        </div>
        <div className="report-content">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>Audit Id:</strong>
                </td>
                <td>{props.houseAudit._id}</td>
              </tr>
              <tr>
                <td>
                  <strong>House:</strong>
                </td>
                <td>{props.houseAudit.house}</td>
              </tr>
              <tr>
                <td>
                  <strong>Date:</strong>
                </td>
                <td>{moment(props.houseAudit.date).format('MM/DD/YYYY')}</td>
              </tr>
              <tr>
                <td>
                  <strong>Auditors:</strong>
                </td>
                <td>{props.houseAudit.auditor}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    houseAudit: state.houseAudits[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchHouseAudit }
)(HouseAuditShow);
