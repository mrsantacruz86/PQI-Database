import {
  LOADING,
  GOT_ERROR,
  LOGIN,
  LOGOUT,
  REGISTER,
  TOGGLE_DRAWER,
  OPEN_MENU,
  CLOSE_MENU
} from './types';
import axios from 'axios';

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
export const login = (user) => dispatch => {
  dispatch(loading());
  axios
    .post("/login", user)
    .then(res => {
      if (res.data.token) {
        dispatch({
          type: GOT_ERROR
        })
      } else {
        dispatch({
          type: LOGIN,
          payload: res.data
        });
      }
    })
    .catch(err => console.log(err));
};

// Register
export const register = (user) => dispatch => {
  dispatch(loading());
  axios
    .post("/register", user)
    .then(res => {
      if (!res.data.err) {
        dispatch({
          type: GOT_ERROR,
          payload: { message: res.data.message }
        })
      } else {
        dispatch({
          type: REGISTER,
          payload: { message: "Account was successfully created!" }
        });
      }
    })
    .catch(err => console.log(err));
};

// Logout
export const logout = () => {
  return {
    type: LOGOUT
  };
};

// Toggle drawer
export const toggleDrawer = () => {
  return {
    type: TOGGLE_DRAWER
  };
};

// Open Menu
export const openMenu = target => {
  return {
    type: OPEN_MENU,
    payload: target
  };
};

// Toggle drawer
export const closeMenu = () => {
  return {
    type: CLOSE_MENU
  };
};
