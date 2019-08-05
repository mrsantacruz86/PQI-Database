import React from 'react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

const HouseAuditItem = props => {
  const { push, itemLabel, itemName, itemScores, itemMaxScore } = props;
  return (
    <div className="card my-2">
      <h6 className="card-header">{`${itemLabel} (max ${itemMaxScore}%)`}</h6>
      <div className="card-body">
        <div className="form-row">
          {itemScores.map((score, index) => (
            <label key={index} className="col-1 mx-2">
              <Field
                name={`${itemName}.score`}
                component="input"
                type="radio"
                value={score}
                parse={value => Number(value)}
              />{' '}
              {score}%
            </label>
          ))}
          <button
            className="btn btn-secondary btn-sm"
            type="button"
            onClick={() => push(`${itemName}.findings`, undefined)}
          >
            Add Finding
          </button>
        </div>
        <div className="form-row mt-3">
          <FieldArray name={`${itemName}.findings`}>
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
                      <span aria-hidden="true">&times;</span>
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
