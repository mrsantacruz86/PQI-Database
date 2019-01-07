import {
  GET_HOUSE_LIST,
  GET_HOUSE_AUDIT,
  SAVE_HOUSE_AUDIT,
  // UPDATE_HOUSE_AUDIT,
  // DELETE_HOUSE_AUDIT
} from '../actions/types';
// import shortid from 'shortid';

const initialState = {
  houseList: [
    {
      "_id": "5c0837d16589034d24644199",
      "active": true,
      "number": 41,
      "program": "Res",
    },
    {
      "_id": "5c0837d16589034d2464419d",
      "active": true,
      "number": 33,
      "program": "UAC",
    },
    {
      "_id": "5c0837d16589034d246441a1",
      "active": true,
      "number": 29,
      "program": "UAC",
    },
    {
      "_id": "5c0837d16589034d246441a5",
      "active": true,
      "number": 23,
      "program": "Res",
    }
  ],
  currentAudit: {},
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

    case SAVE_HOUSE_AUDIT:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};