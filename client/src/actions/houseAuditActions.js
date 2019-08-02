import {
  FETCH_HOUSE_AUDITS,
  // FETCH_HOUSE_AUDIT,
  CREATE_HOUSE_AUDIT,
  // DELETE_HOUSE_AUDIT,
  // EDIT_HOUSE_AUDIT,
  HOUSE_AUDIT_FIELD_CHANGE,
  HOUSE_AUDIT_FINDING_CHANGE,
  HOUSE_AUDIT_ITEM_CHANGE
} from './types';
import axios from 'axios';
import { loading, stopLoading } from './appActions';
// import moment from 'moment';
import history from '../history';


const api = axios.create({
  baseURL: '/api', 
  headers: { Authorization: 'bearer ' + window.sessionStorage.jwToken }
})

// Create House Audit
export const saveHouseAudit = audit => dispatch => {
  const response = await api.post('/houseaudits', audit);
  console.log(JSON.stringify(response, 0, 2));
  alert('Audit successfully created!');
  history.push('/houseaudits');
};

export const fetchHouseAudits = () => async dispatch => {
  const response = await axios.get('/api/houseaudits');
  dispatch({ type: FETCH_HOUSE_AUDITS, payload: response.data });
};

// export const fetchStream = id => async dispatch => {
//   const response = await streams.get(`/streams/${id}`);
//   dispatch({ type: FETCH_STREAM, payload: response.data });
// };

// ----------------------------------------------------------------------------
// export const createStream = formValues => async (dispatch, getState) => {
//   const { userId } = getState().auth;
//   const response = await streams.post("/streams", { ...formValues, userId });
//   dispatch({ type: CREATE_STREAM, payload: response.data });
//   history.push("/");
// };

// export const fetchStreams = () => async dispatch => {
//   const response = await streams.get("/streams");
//   dispatch({ type: FETCH_STREAMS, payload: response.data });
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
