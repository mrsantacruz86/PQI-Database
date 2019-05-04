import {
  GET_HOUSE_LIST,
  GET_HOUSE_AUDIT,
  SAVE_HOUSE_AUDIT,
  // GET_HOUSE_AUDIT_TEMPLATE
  // UPDATE_HOUSE_AUDIT,
  // DELETE_HOUSE_AUDIT
  HOUSE_AUDIT_FIELD_CHANGE,
  HOUSE_AUDIT_ITEM_CHANGE,
  HOUSE_AUDIT_FINDING_CHANGE,
} from '../actions/types';
// @ts-ignore
import items from '../utils/HouseAuditItems.json';
import update from 'immutability-helper';

const initialState = {
  cottage: "",
  auditor: "",
  date: "",
  auditItems: [...items],
};

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_HOUSE_AUDIT:
      return {
        ...state,
        ...action.payload
      };

    case SAVE_HOUSE_AUDIT:
      return {
        ...state,
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