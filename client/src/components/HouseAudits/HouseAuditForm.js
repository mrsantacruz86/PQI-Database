import React from 'react';
import { Form, Field } from 'react-final-form';
import moment from 'moment';
import arrayMutators from 'final-form-arrays';
import createDecorator from 'final-form-calculate';
import HouseAuditItem from './HouseAuditItem';
import HouseAuditMaintenanceItem from './HouseAuditMaintenanceItem';

// Data json files
import { houses, houseAuditItems } from './houseAudits.json';

const calculator = createDecorator(
  {
    field: /items.\w/,
    updates: {
      score: (ignoredValue, allValues) =>
        (Object.values(allValues.items) || []).reduce(
          (total, { score }) => total + Number(score || 0),
          0
        )
    }
  }
  // {
  //   field: 'maintenance.findings',
  //   updates: {
  //     maintenance: {
  //       score: (ignoredValue, allValues) => (allValues.length / 16) * 100
  //     }
  //   }
  // }
);

const HouseAuditForm = props => {
  const onSubmit = values => {
    props.onSubmit(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      mutators={{
        ...arrayMutators
      }}
      decorators={[calculator]}
      initialValues={props.values || {}}
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
                <option defaultValue value="">
                  Select a house
                </option>
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
                <option defaultValue value="">
                  Select a Dept
                </option>
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
          <HouseAuditMaintenanceItem
            label="Maintenance"
            fieldName="maintenance"
            maxScore={16}
            push={push}
            score={100}
          />
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
  );
};

export default HouseAuditForm;
