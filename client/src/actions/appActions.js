import {
  LOADING,
  ADD_FLASH_MESSAGE,
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
export const addFlashMessage = (type, text) => {
  return {
    type: ADD_FLASH_MESSAGE,
    message: {
      type:type,
      text: text
    }
  };
};

// Login
export const login = (user) => dispatch => {
  dispatch(loading());
  axios
    .post("/login", user)
    .then(res => {
      if (res.data.token) {
        dispatch(addFlashMessage("success", "Welcome, You signed in successfuly"));
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
          type: ADD_FLASH_MESSAGE,
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
