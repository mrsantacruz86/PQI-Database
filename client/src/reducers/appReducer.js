import { TOGGLE_NAVBAR } from '../actions/types';

const initialState = {
  navbarOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        navbarOpen: !state.navBarOpen
      };

    default:
      return state;
  }
};
