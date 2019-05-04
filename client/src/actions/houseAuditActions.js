import {
  GET_HOUSE_AUDIT,
  SAVE_HOUSE_AUDIT,
  HOUSE_AUDIT_FIELD_CHANGE,
  HOUSE_AUDIT_FINDING_CHANGE,
  HOUSE_AUDIT_ITEM_CHANGE,
  // GET_HOUSE_AUDIT_TEMPLATE,
  // DELETE_HOUSE_AUDIT,
  // UPDATE_HOUSE_AUDIT
} from './types';
import axios from 'axios';
import { loading, stopLoading } from "./appActions";
import moment from 'moment';

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
          cottage: "",
          auditor: "",
          date: moment().format('YYYY-MM-DD'),
          auditItems: res.data
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

// OnChange event for audit input components
export const handleInputChange = (name, value) => {
  return {
    type: HOUSE_AUDIT_FIELD_CHANGE,
    payload: {
      name: name,
      value: value
    }
  }
};

// OnChange event for audit Items
export const handleItemChange = (index, value) => {
  return {
    type: HOUSE_AUDIT_ITEM_CHANGE,
    payload: {
      index: index,
      value: value
    }
  }
};

// OnChange event for findings
export const handleFindingChange = (index, findings) => {
  return {
    type: HOUSE_AUDIT_FINDING_CHANGE,
    payload: {
      index: index,
      findings: findings
    }
  }
};
