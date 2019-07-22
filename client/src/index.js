import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { LOGIN } from './actions/types';
import decodeJWT from './utils/decodeJWT';

if (sessionStorage.jwToken) {
  setAuthToken(sessionStorage.jwToken);
  store.dispatch({
    type: LOGIN,
    payload: decodeJWT(sessionStorage.jwToken)
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
