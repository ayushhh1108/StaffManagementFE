import { combineReducers } from "redux";
import loginPageReducer from "../pages/LoginPage/reducer";
import staffDataReducer from "../pages/StaffListPage/reducer";

const createReducer = () => {
  const rootReducer = combineReducers({
    loginPageReducer: loginPageReducer,
    staffDataReducer: staffDataReducer,
  });
  return rootReducer;
};

export default createReducer;
