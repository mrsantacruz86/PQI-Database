import React from 'react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

const HouseAuditItem = props => {
  const { push, label, fieldName, maxScore, score } = props;
  return (
    <div className="card mt-1">
      <div className="card-body">
        <div className="row justify-content-between">
          <legend className="col-form-label col-auto pt-1">{`${label} (${score}%)`}</legend>
          <div className="col-auto">
            <button
              className="btn btn-primary btn-sm"
              type="button"
              onClick={() => push(`${fieldName}.findings`, undefined)}
            >
              <i class="fas fa-plus" /> Finding
            </button>
          </div>
        </div>
        <div className="mt-2">
          <FieldArray name={`${fieldName}.findings`}>
            {({ fields }) =>
              fields.map((name, index) => (
                <div key={name} className="input-group input-group-sm mb-1">
                  <div className="input-group-prepend">
                    <span className="input-group-text">{index + 1}</span>
                  </div>
                  <Field
                    className="form-control"
                    name={`${name}`}
                    component="input"
                    placeholder="Finding"
                  />
                  <div className="input-group-append" id="button-addon4">
                    <button
                      onClick={() => fields.remove(index)}
                      className="btn btn-outline-danger"
                      type="button"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              ))
            }
          </FieldArray>
        </div>
      </div>
    </div>
  );
};

export default HouseAuditItem;
