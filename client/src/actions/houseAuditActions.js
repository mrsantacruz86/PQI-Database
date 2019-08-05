import {
  FETCH_HOUSE_AUDITS,
  // FETCH_HOUSE_AUDIT,
  CREATE_HOUSE_AUDIT
  // DELETE_HOUSE_AUDIT,
  // EDIT_HOUSE_AUDIT,
} from './types';
// import moment from 'moment';
import axios from 'axios';
import history from '../history';

const api = axios.create({
  baseURL: '/api',
  headers: { Authorization: 'bearer ' + window.sessionStorage.jwToken }
});

// Create House Audit
export const createHouseAudit = audit => async dispatch => {
  const response = await api.post('/houseaudits', audit);
  dispatch({ type: CREATE_HOUSE_AUDIT, payload: response.data });
  alert('Audit successfully created!');
  history.push('/houseaudits');
};

// Fetch All House audits
export const fetchHouseAudits = () => async dispatch => {
  const response = await api.get('/houseaudits');
  dispatch({ type: FETCH_HOUSE_AUDITS, payload: response.data });
};

// ----------------------------------------------------------------------------

// export const fetchStream = id => async dispatch => {
//   const response = await streams.get(`/streams/${id}`);
//   dispatch({ type: FETCH_STREAM, payload: response.data });
// };

// export const fetchStream = id => async dispatch => {
//   const response = await streams.get(`/streams/${id}`);
//   dispatch({ type: FETCH_STREAM, payload: response.data });
// };

// export const editStream = (id, formValues) => async dispatch => {
//   const response = await streams.patch(`/streams/${id}`, formValues);
//   dispatch({ type: EDIT_STREAM, payload: response.data });
//   history.push("/");
// };

// export const deleteStream = id => async dispatch => {
//   await streams.delete(`/streams/${id}`);
//   dispatch({ type: DELETE_STREAM, payload: id });
//   history.push("/");
// };
