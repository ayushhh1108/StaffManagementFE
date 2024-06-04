import { combineReducers } from "redux";
import loginPageReducer from "../pages/LoginPage/reducer";
import blogsPageReducer from "../pages/BlogPage/reducer";

const createReducer = () => {
  const rootReducer = combineReducers({
    loginPageReducer: loginPageReducer,
    blogsPageReducer: blogsPageReducer
  });
  return rootReducer;
};

export default createReducer;
