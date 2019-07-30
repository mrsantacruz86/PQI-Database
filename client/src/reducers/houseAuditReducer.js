import _ from 'lodash';
import {
  FETCH_HOUSE_AUDITS,
  // FETCH_HOUSE_AUDIT,
  // CREATE_HOUSE_AUDIT,
  // DELETE_HOUSE_AUDIT,
  // EDIT_HOUSE_AUDIT,
  HOUSE_AUDIT_FIELD_CHANGE,
  HOUSE_AUDIT_ITEM_CHANGE,
  HOUSE_AUDIT_FINDING_CHANGE
} from '../actions/types';
// @ts-ignore
// import items from '../utils/HouseAuditItems.json';
import update from 'immutability-helper';

// const initialState = {
//   cottage: '',
//   auditor: '',
//   date: '',
//   auditItems: [...items]
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HOUSE_AUDITS:
      return {
        ...state,
        ..._.mapKeys(action.payload, '_id')
      };

    case HOUSE_AUDIT_FIELD_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    case HOUSE_AUDIT_ITEM_CHANGE:
      return update(state, {
        auditItems: {
          [action.payload.index]: {
            value: { $set: !action.payload.value }
          }
        }
      });

    case HOUSE_AUDIT_FINDING_CHANGE:
      return update(state, {
        auditItems: {
          [action.payload.index]: {
            findings: { $set: action.payload.findings }
          }
        }
      });

    default:
      return state;
  }
};
