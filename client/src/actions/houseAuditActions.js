import {
  GET_HOUSE_LIST,
  // GET_HOUSE_AUDIT,
  SAVE_HOUSE_AUDIT,
  // DELETE_HOUSE_AUDIT,
  // UPDATE_HOUSE_AUDIT
} from './types';
import axios from 'axios';
import { loading } from "./appActions";

// Get House List
export const getHouses = () => dispatch => {
  dispatch(loading());
  axios
    .get("/api/houses")
    .then(res => {
      const houseList = res.data;
      // console.log("Lista de casas", houseList);
      dispatch({
        type: GET_HOUSE_LIST,
        payload: houseList
      });

    })
    .catch(err => console.log(err));
};

// Create House Audit
export const createAudit = (audit) => dispatch => {
  dispatch(loading());
  axios
    .post("/api/house-audits", audit)
    .then(res => {
      dispatch({
        type: SAVE_HOUSE_AUDIT
      });

    })
    .catch(err => console.log(err));
};
