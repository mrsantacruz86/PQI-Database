import axios from 'axios';
import setAuthToken from "../utils/setAuthToken";
import {
  ADD_FLASH_MESSAGE,
  CLOSE_MENU,
  LOADING,
  LOGIN,
  LOGOUT,
  OPEN_MENU,
  REGISTER,
  STOP_LOADING,
  TOGGLE_DRAWER,
  TOGGLE_USER_MENU
} from './types';


//Loading
export const loading = () => {
  return {
    type: LOADING
  };
};
export const stopLoading = () => {
  return {
    type: STOP_LOADING
  };
};

//Got an error
export const addFlashMessage = (type, text) => {
  return {
    type: ADD_FLASH_MESSAGE,
    message: {
      type: type,
      text: text
    }
  };
};

// Login
export const login = user => dispatch => {
  dispatch(loading());
  axios
    .post("/login", user)
    .then(res => {
      const token = res.data.token;
      if (!token) {
        console.log("The account credentials are not valid. Please try again");
      } else {
        const payload = { ...res.data.user }
        // console.log("Este es el usuario", payload);
        dispatch({
          type: LOGIN,
          payload
        });
        sessionStorage.setItem("jwToken", token);
        setAuthToken(token);
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
  sessionStorage.removeItem("jwToken");
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

// Open context menu
export const openMenu = target => {
  // console.log(target);
  return {
    type: OPEN_MENU,
    payload: target
  };
};

// Close context menu
export const closeMenu = () => {
  return {
    type: CLOSE_MENU
  };
};

// Toggle user menu
export const toggleUserMenu = () => {
  return {
    type: TOGGLE_USER_MENU
  };
};
