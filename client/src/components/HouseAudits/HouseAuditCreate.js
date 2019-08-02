import React from 'react';
import { Form, Field } from 'react-final-form';
import moment from 'moment';
import arrayMutators from 'final-form-arrays';
import HouseAuditItem from './HouseAuditItem';
import { connect } from 'react-redux';

// Data json files
import { createHouseAudit } from '../../actions/houseAuditActions';
import { houses, houseAuditItems } from './houseAudits.json';

const HouseAuditCreate = props => {
  const onSubmit = async values => {
    props.createHouseAudit(values);
  };

  return (
    <div className="container">
      <h3 className="my-5">Create House Audit</h3>

      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators
        }}
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
            <div className="form-group">
              <label>Auditor</label>
              <Field
                className="form-control"
                id="auditor"
                name="auditor"
                component="input"
                type="text"
                placeholder="Auditor"
              />
            </div>
            <div className="form-group">
              <label>House</label>
              <Field
                className="custom-select"
                id="house"
                name="house"
                component="select"
                placeholder="House"
              >
                {houses.map(house => (
                  <option key={house}>{house}</option>
                ))}
              </Field>
            </div>
            <div className="form-group">
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

            <h4>Audit Items</h4>
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

            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
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
