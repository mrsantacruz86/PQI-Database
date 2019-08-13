import {
  FETCH_HOUSE_AUDITS,
  FETCH_HOUSE_AUDIT,
  CREATE_HOUSE_AUDIT,
  DELETE_HOUSE_AUDIT,
  EDIT_HOUSE_AUDIT
} from './types';
// import moment from 'moment';
import axios from 'axios';
import history from '../history';

const api = axios.create({
  headers: { Authorization: 'bearer ' + window.sessionStorage.jwToken }
});

// Create House Audit
export const createHouseAudit = audit => async dispatch => {
  const response = await api.post('/api/houseaudits', audit);
  dispatch({ type: CREATE_HOUSE_AUDIT, payload: response.data });
  alert('Audit successfully created!');
  history.push('/houseaudits');
};

// Fetch All House audits
export const fetchHouseAudits = () => async dispatch => {
  const response = await api.get('/api/houseaudits');
  dispatch({ type: FETCH_HOUSE_AUDITS, payload: response.data });
  console.log('Fetch Audits');
};

// Fetch One House audits
export const fetchHouseAudit = id => async dispatch => {
  const response = await api.get(`/api/houseaudits/${id}`);
  dispatch({ type: FETCH_HOUSE_AUDIT, payload: response.data });
};

// Edit House Audit
export const editHouseAudit = (id, formValues) => async dispatch => {
  const response = await api.patch(`/api/houseaudits/${id}`, formValues);
  dispatch({ type: EDIT_HOUSE_AUDIT, payload: response.data });
  history.push('/houseaudits');
};

// Delete House Audit
export const deleteHouseAudit = id => async dispatch => {
  await api.delete(`/api/houseaudits/${id}`);
  dispatch({ type: DELETE_HOUSE_AUDIT, payload: id });
  history.push('/houseaudits');
};
