import { combineReducers } from "redux";

import employeeReducer from "./Crud";

const rootReducers = combineReducers({
  employeeReducer
});

export default rootReducers;
