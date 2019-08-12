import React, { Fragment, Component } from 'react';
import history from '../../history';
import { connect } from 'react-redux';

// Data json files
import { editHouseAudit, fetchHouseAudit } from '../../actions/houseAuditActions';
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
// const formValues = {
//   auditor: 'Nelson Abner Diaz',
//   house: '31',
//   department: 'UAC',
//   date: '2019-07-01T04:00:00.000Z',
//   items: {
//     medication: {
//       score: 10,
//       findings: ['Finding 1', 'Finding 2']
//     },
//     ss: {
//       score: 20
//     },
//     hc: {
//       score: 20
//     },
//     documentation: {
//       score: 10
//     },
//     organization: {
//       score: 10
//     },
//     pr: {
//       score: 10
//     },
//     supplies: {
//       score: 5
//     },
//     equipment: {
//       score: 0,
//       findings: ['1 Chair is broken']
//     }
//   },
//   score: 85
// };
class HouseAuditCreate extends Component {
  componentDidMount() {
    this.props.fetchHouseAudit(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editHouseAudit(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props.match);
    return (
      <div className="container mt-5">
        <h3 className="my-5">Edit House Audit ID: {this.props.match.params.id} </h3>
        <HouseAuditForm onSubmit={this.onSubmit} values={this.props.houseAudit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { houseAudit: state.houseAudits[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { editHouseAudit, fetchHouseAudit }
)(HouseAuditCreate);
