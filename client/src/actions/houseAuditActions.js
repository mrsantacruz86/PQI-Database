import {
  GET_HOUSE_LIST,
  GET_HOUSE_AUDIT,
  // GET_HOUSE_AUDIT_TEMPLATE,
  SAVE_HOUSE_AUDIT,
  // DELETE_HOUSE_AUDIT,
  // UPDATE_HOUSE_AUDIT
} from './types';
import axios from 'axios';
import { loading, stopLoading } from "./appActions";
import moment from 'moment';

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
      dispatch(stopLoading());
    })
    .catch(err => console.log(err));
};

// Create House Audit
export const saveHouseAudit = (audit) => dispatch => {
  dispatch(loading());
  axios
    .post("/api/house-audits", audit)
    .then(res => {
      dispatch({
        type: SAVE_HOUSE_AUDIT
      });
      dispatch(stopLoading());
    })
    .catch(err => console.log(err));
};

// Get House Audit Template
export const getHouseAudit = (id) => dispatch => {
  dispatch(loading());
  if (!id) {
    axios.get("/api/house-audits-items")
      .then(res => {
        const cottageAudit = {
          cottage: undefined,
          auditor: "",
          date: moment().format('YYYY-MM-DD'),
          auditItems: { ...res.data }
        };

        dispatch({
          type: GET_HOUSE_AUDIT,
          payload: cottageAudit
        });
        dispatch(stopLoading());
      })
      .catch(err => console.log(`Got issues loading audit items\n error: ${err}`));
  }
};
