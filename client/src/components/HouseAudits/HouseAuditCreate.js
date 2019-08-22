import React from 'react';
import { connect } from 'react-redux';

// Data json files
import { createHouseAudit } from '../../actions/houseAuditActions';
import HouseAuditForm from './HouseAuditForm';

const HouseAuditCreate = props => {
  const onSubmit = values => {
    props.createHouseAudit(values);
  };

  return (
    <div className="container mt-5">
      <h3 className="my-5">Create House Audit</h3>
      <HouseAuditForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(
  null,
  { createHouseAudit }
)(HouseAuditCreate);
