import {
  LOADING,
  GOT_ERROR,
  LOGIN,
  LOGOUT,
  TOGGLE_DRAWER,
  OPEN_MENU,
  CLOSE_MENU
} from '../actions/types';

const initialState = {
  auth: true,
  loading: false,
  error: false,
  flashMessage: "",
  drawerOpen:false,
  anchorEl:null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case GOT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case LOGIN:
      return {
        ...state,
        loading: false,
        error: false,
        auth: {access:true}
      };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        error: false,
        auth: {}
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