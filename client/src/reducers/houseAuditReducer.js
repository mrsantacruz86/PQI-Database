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
      "_id": "5c0837d16589034d2464419a",
      "active": true,
      "number": 40,
      "program": "Res",
    },
    {
      "_id": "5c0837d16589034d2464419b",
      "active": true,
      "number": 35,
      "program": "UAC",
    },
    {
      "_id": "5c0837d16589034d2464419c",
      "active": true,
      "number": 34,
      "program": "UAC",
    },
    {
      "_id": "5c0837d16589034d2464419d",
      "active": true,
      "number": 33,
      "program": "UAC",
    },
    {
      "_id": "5c0837d16589034d2464419f",
      "active": true,
      "number": 31,
      "program": "UAC",
    },
    {
      "_id": "5c0837d16589034d246441a0",
      "active": true,
      "number": 30,
      "program": "UAC",
    },
    {
      "_id": "5c0837d16589034d2464419e",
      "active": true,
      "number": 32,
      "program": "UAC",
    },
    {
      "_id": "5c0837d16589034d246441a2",
      "active": false,
      "number": 28,
      "program": "Res",
    },
    {
      "_id": "5c0837d16589034d246441a3",
      "active": true,
      "number": 27,
      "program": "Res",
    },
    {
      "_id": "5c0837d16589034d246441a4",
      "active": true,
      "number": 25,
      "program": "Res",
    },
    {
      "_id": "5c0837d16589034d246441a6",
      "active": true,
      "number": 22,
      "program": "Res",
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