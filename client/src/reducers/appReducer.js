import shortid from 'shortid';
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
} from '../actions/types';

const initialState = {
  auth: false,
  user: {},
  loading: false,
  error: false,
  flashMessages: {},
  drawerOpen: false,
  anchorEl: null,
  userMenuOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };

    case ADD_FLASH_MESSAGE:
      return {
        ...state,
        loading: false,
        error: true,
        flashMessages: [
          ...state.flashMessages,
          {
            id: shortid.generate(),
            type: action.message.type,
            text: action.message.text
          }
        ]
      };

    case LOGIN:
      return {
        ...state,
        auth: true,
        user: action.payload,
        loading: false
      };

    case REGISTER:
      return {
        ...state,
        loading: false,
        flashMessage: action.payload.message,
        error: false
      };

    case LOGOUT:
      return {
        ...state,
        auth: false,
        drawerOpen: false,
        user: {}
      };

    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      };

    case OPEN_MENU:
      return {
        ...state,
        anchorEl: action.payload
      };

    case CLOSE_MENU:
      return {
        ...state,
        anchorEl: null
      };

    case TOGGLE_USER_MENU:
      return {
        ...state,
        userMenuOpen: !state.userMenuOpen
      };

    default:
      return state;
  }
};