import {
  GET_HOUSE_LIST,
  GET_HOUSE_AUDIT,
  SAVE_HOUSE_AUDIT,
  GET_HOUSE_AUDIT_TEMPLATE
  // UPDATE_HOUSE_AUDIT,
  // DELETE_HOUSE_AUDIT
} from '../actions/types';
// import shortid from 'shortid';

const initialState = {
  houseList: [],
  houseAuditTemplate: {},
};

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_HOUSE_LIST:
      return {
        ...state,
        houseList: action.payload
      };

    case GET_HOUSE_AUDIT:
      return {
        ...state,
        currentAudit: action.payload
      };

    case GET_HOUSE_AUDIT_TEMPLATE:
      return {
        ...state,
        houseAuditTemplate: action.payload,
      };

    case SAVE_HOUSE_AUDIT:
      return {
        ...state,
      };

    default:
      return state;
  }
};