import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import moment from 'moment';
import arrayMutators from 'final-form-arrays';
import createDecorator from 'final-form-calculate';
import HouseAuditItem from './HouseAuditItem';
import { connect } from 'react-redux';
import history from '../../history';

// Data json files
import { createHouseAudit } from '../../actions/houseAuditActions';
import { houses, houseAuditItems } from './houseAudits.json';
import Modal from '../Modal';

const calculator = createDecorator({
  field: /items.\w/,
  updates: {
    score: (ignoredValue, allValues) =>
      (Object.values(allValues.items) || []).reduce(
        (total, { score }) => total + Number(score || 0),
        0
      )
  }
});

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
  const onSubmit = async values => {
    props.createHouseAudit(values);
    await renderModal();
  };

  return (
    <div className="container">
      <h3 className="my-5">Create House Audit</h3>

      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators
        }}
        decorators={[calculator]}
      >
        {({
          handleSubmit,
          form: {
            mutators: { push }
          }, // injected from final-form-arrays above
          pristine,
          form,
          submitting,
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Auditor</label>
                <Field
                  className="form-control"
                  name="auditor"
                  component="input"
                  type="text"
                  placeholder="Auditor"
                />
              </div>

              <div className="form-group col-md-2">
                <label>House</label>
                <Field className="custom-select" name="house" component="select">
                  <option selected>Select a house</option>
                  {houses.map(house => (
                    <option key={house} value={house}>
                      {house}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="form-group col-md-2">
                <label>Department</label>
                <Field className="custom-select" name="department" component="select">
                  <option selected>Select a Dept</option>
                  <option value="Domestic">Domestic</option>
                  <option value="UAC">UAC</option>
                </Field>
              </div>
              <div className="form-group col-md-4">
                <label>Date</label>
                <Field
                  className="form-control"
                  id="date"
                  name="date"
                  component="input"
                  type="date"
                  parse={value => moment(value)}
                  format={value => (value ? moment(value).format('YYYY-MM-DD') : '')}
                />
              </div>
            </div>
            {/* Audit Items */}
            <div className="row my-5">
              <h4 className="col-md-4">Audit Items</h4>
              <label className="col-md-2 offset-md-4 mt-2 text-right">Score</label>
              <div className="col-md-2">
                <Field
                  className="form-control"
                  id="score"
                  name="score"
                  component="input"
                  readOnly
                  type="text"
                  placeholder="0"
                />
              </div>
            </div>
            {houseAuditItems.map((item, index) => (
              <HouseAuditItem
                key={index}
                itemLabel={item.label}
                itemName={`items.${item.name}`}
                itemScores={item.scores}
                itemMaxScore={item.max}
                push={push}
              />
            ))}

            <div className="buttons my-3">
              <button
                className="btn btn-primary mr-3"
                type="submit"
                disabled={submitting || pristine}
              >
                Submit
              </button>
              <button
                className="btn btn-secondary mr-3"
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
          </form>
        )}
      </Form>
    </div>
  );
};

export default connect(
  null,
  { createHouseAudit }
)(HouseAuditCreate);
