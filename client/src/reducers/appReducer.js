import {
  LOADING,
  ADD_FLASH_MESSAGE,
  LOGIN,
  LOGOUT,
  TOGGLE_DRAWER,
  OPEN_MENU,
  CLOSE_MENU,
  REGISTER
} from '../actions/types';
import shortid from 'shortid';

const initialState = {
  auth: false,
  user: {},
  loading: false,
  error: false,
  flashMessages: {},
  drawerOpen: false,
  anchorEl: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case LOADING:
      return {
        ...state,
        loading: true,
        error: false,
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

    default:
      return state;
  }
};