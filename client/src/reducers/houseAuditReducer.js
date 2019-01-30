import {
  GET_HOUSE_LIST,
  GET_HOUSE_AUDIT,
  SAVE_HOUSE_AUDIT,
  // GET_HOUSE_AUDIT_TEMPLATE
  // UPDATE_HOUSE_AUDIT,
  // DELETE_HOUSE_AUDIT
} from '../actions/types';
import { empty } from 'rxjs';
// import shortid from 'shortid';

const initialState = {
  houseList: [],
  cottageAudit: {
    cottage: undefined,
    auditor: undefined,
    date: "",
    auditItems: {},
  }
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
        cottageAudit: {
          ...action.payload
        },
      };

    case SAVE_HOUSE_AUDIT:
      return {
        ...state,
      };

    default:
      return state;
  }
};