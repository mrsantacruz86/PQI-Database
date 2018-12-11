import {
  LOADING,
  GOT_ERROR,
  LOGIN,
  LOGOUT
} from '../actions/types';

const initialState = {
  auth: {},
  loading: false,
  error: false,
  flashMessage: "",
  drawerOpen:false
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
        auth: {access:false}
      };
      
    default:
      return state;
  }
};