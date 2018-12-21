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

// Register
export const register = () => {
  return {
    type: REGISTER
  };
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
