import { combineReducers } from "redux";
// import { reducer as formReducer } from 'redux-form'
import app from "./appReducer";
import houseAudit from "./houseAuditReducer";
import houses from "./houseReducer";

export default combineReducers({
  app,
  houseAudit,
  houses
  // form: formReducer  //add  more reducer here...
});