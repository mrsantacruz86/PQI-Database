import { combineReducers } from "redux";
// import { reducer as formReducer } from 'redux-form'
import app from "./appReducer";
import houseAudit from "./houseAuditReducer";

export default combineReducers({
  app,
  houseAudit
  // form: formReducer  //add  more reducer here...
});