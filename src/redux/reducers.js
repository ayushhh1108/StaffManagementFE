import { combineReducers } from "redux";
import loginPageReducer from "../pages/LoginPage/reducer";

const createReducer = () => {
  const rootReducer = combineReducers({
    loginPageReducer: loginPageReducer,
  });
  return rootReducer;
};

export default createReducer;
