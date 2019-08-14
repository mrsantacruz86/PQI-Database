import React, { Fragment } from 'react';
import history from '../../history';
import { connect } from 'react-redux';

// Data json files
import { createHouseAudit } from '../../actions/houseAuditActions';
import Modal from '../Modal';
import HouseAuditForm from './HouseAuditForm';

// Render Modal
const renderModalActions = () => {
  return (
    <Fragment>
      <button type="button" className="btn btn-secondary" data-dismiss="modal">
        Close
      </button>
    </Fragment>
  );
};
const renderModal = () => {
  return (
    <Modal
      title="Audit succesfully saved."
      onDismiss={() => history.push('/houseaudits')}
      actions={renderModalActions}
    >
      The Cottage audtid has been successfully saved!
    </Modal>
  );
};

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
