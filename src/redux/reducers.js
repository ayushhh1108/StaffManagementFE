import { combineReducers } from "redux";
import loginPageReducer from "../pages/LoginPage/reducer";
import blogsPageReducer from "../pages/BlogPage/reducer";
import careersReducer from "../pages/CareersPage/reducer";
import aboutPageReducer from "../pages/AboutPage/reducer";
import sliderReducer from "../pages/SliderPage/reducer";
import usersReducer from "../pages/UsersPage/reducer";
import userRoleReducer from "../pages/UserRolePage/reducer";

const createReducer = () => {
  const rootReducer = combineReducers({
    loginPageReducer: loginPageReducer,
    blogsPageReducer: blogsPageReducer,
    careersReducer: careersReducer,
    aboutPageReducer: aboutPageReducer,
    sliderReducer: sliderReducer,
    usersReducer: usersReducer,
    userRoleReducer: userRoleReducer,
  });
  return rootReducer;
};

export default createReducer;
