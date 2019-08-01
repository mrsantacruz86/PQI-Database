import React from 'react';
import { Form, Field } from 'react-final-form';
import moment from 'moment';
import arrayMutators from 'final-form-arrays';
import HouseAuditItem from './HouseAuditItem';

const houses = [
  '22',
  '23',
  '25',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '40',
  '41',
  '42',
  '43'
];

const auditItems = [
  {
    name: 'medication',
    label: 'Medication',
    max: 20,
    scores: [20, 10, 0]
  },
  {
    name: 'ss',
    label: 'Safety and Security',
    max: 20,
    scores: [20, 10, 0]
  },
  {
    name: 'hc',
    label: 'Health and Cleanliness',
    max: 20,
    scores: [20, 10, 0]
  },
  {
    name: 'documentation',
    label: 'Documentation',
    max: 10,
    scores: [10, 5, 0]
  },
  {
    name: 'organization',
    label: 'Organization',
    max: 10,
    scores: [10, 5, 0]
  },
  {
    name: 'pr',
    label: 'Program Requirements',
    max: 10,
    scores: [10, 5, 0]
  },
  {
    name: 'supplies',
    label: 'Supplies and Storage',
    max: 5,
    scores: [5, 0]
  },
  {
    name: 'equipment',
    label: 'Furniture and Equipment',
    max: 5,
    scores: [5, 0]
  }
];

const HouseAuditCreate = () => {
  const onSubmit = values => {
    window.alert(JSON.stringify(values, 0, 2));
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
            {auditItems.map((item, index) => (
              <HouseAuditItem
                itemLabel={item.label}
                itemName={`items.${item.name}`}
                itemScores={item.scores.map(score => score.toString())}
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

export default HouseAuditCreate;
