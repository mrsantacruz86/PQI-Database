import {
  GET_HOUSE_AUDIT,
  SAVE_HOUSE_AUDIT,
  // UPDATE_HOUSE_AUDIT,
  // DELETE_HOUSE_AUDIT
} from '../actions/types';
// import shortid from 'shortid';

const initialState = {
  currentAudit: {},
};

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_HOUSE_AUDIT:
      return {
        ...state,
        currentAudit: action.payload
      };

    case SAVE_HOUSE_AUDIT:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};