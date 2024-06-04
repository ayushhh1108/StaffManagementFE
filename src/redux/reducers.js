import { combineReducers } from "redux";
import loginPageReducer from "../pages/LoginPage/reducer";
import blogsPageReducer from "../pages/BlogPage/reducer";
import careersReducer from "../pages/CareersPage/reducer";

const createReducer = () => {
  const rootReducer = combineReducers({
    loginPageReducer: loginPageReducer,
    blogsPageReducer: blogsPageReducer,
    careersReducer: careersReducer,
  });
  return rootReducer;
};

export default createReducer;
