import React from 'react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

const HouseAuditItem = props => {
  const { push, itemLabel, itemName, itemScores, itemMaxScore } = props;
  return (
    <div className="form-group">
      <label>{`${itemLabel} (max ${itemMaxScore}%)`}</label>
      {itemScores.map((score, index) => (
        <label key={index}>
          <Field
            name={`${itemName}.score`}
            component="input"
            type="radio"
            value={score}
            parse={value => Number(value)}
            // format={value => value.toString()}
          />{' '}
          {score}%
        </label>
      ))}

      <button
        className="btn btn-secondary"
        type="button"
        onClick={() => push(`${itemName}.findings`, undefined)}
      >
        Add Finding
      </button>
      <FieldArray name={`${itemName}.findings`}>
        {({ fields }) =>
          fields.map((name, index) => (
            <div key={name} className="input-group mb-1">
              <div className="input-group-prepend">
                <span className="input-group-text">{index + 1}</span>
              </div>
              <Field
                className="form-control"
                name={`${name}`}
                component="input"
                placeholder="First Name"
              />
              <div className="input-group-append" id="button-addon4">
                <button
                  onClick={() => fields.remove(index)}
                  className="btn btn-outline-danger"
                  type="button"
                >
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            </div>
          ))
        }
      </FieldArray>
    </div>
  );
};

export default HouseAuditItem;
