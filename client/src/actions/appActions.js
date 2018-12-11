import {
  LOADING,
  GOT_ERROR,
  LOGIN,
  LOGOUT
} from './types';

//Loading
export const loading = () => {
  return {
    type: LOADING
  };
};

//Got an error
export const gotError = () => {
  return {
    type: GOT_ERROR
  };
};

// Login
export const login = () => {
  return {
    type: LOGIN
  };
};

// Login
export const logout = () => {
  return {
    type: LOGOUT
  };
};
