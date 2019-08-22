import React from 'react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

const HouseAuditItem = props => {
  const { push, label, fieldName, maxScore, score } = props;
  return (
    <div className="card my-2">
      <div className="card-header">
        {`${label} (max ${maxScore}%)`}
        <button
          className="btn btn-secondary btn-sm"
          type="button"
          onClick={() => push(`${fieldName}.findings`, undefined)}
        >
          Add Finding
        </button>
      </div>
      <div className="card-body">
        <div className="form-row mt-3">
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
