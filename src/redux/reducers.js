import { combineReducers } from "redux";
import loginPageReducer from "../pages/LoginPage/reducer";
import staffDataReducer from "../pages/StaffListPage/reducer";
import propertyDataReducer from "../pages/PropertyListPage/reducer";

const createReducer = () => {
  const rootReducer = combineReducers({
    loginPageReducer: loginPageReducer,
    staffDataReducer: staffDataReducer,
    propertyDataReducer: propertyDataReducer,
  });
  return rootReducer;
};

export default createReducer;
