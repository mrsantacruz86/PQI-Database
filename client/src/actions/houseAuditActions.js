import {
  GET_HOUSE_LIST,
  // GET_HOUSE_AUDIT,
  // SAVE_HOUSE_AUDIT,
  // DELETE_HOUSE_AUDIT,
  // UPDATE_HOUSE_AUDIT
} from './types';
import axios from 'axios';
import { loading } from "./appActions";

// Login
export const getHouses = () => dispatch => {
  dispatch(loading());
  axios
    .get("/api/houses")
    .then(res => {
      const houseList = res.data;
      console.log("Lista de casas", houseList);
      dispatch({
        type: GET_HOUSE_LIST,
        payload: houseList
      });

    })
    .catch(err => console.log(err));
};
