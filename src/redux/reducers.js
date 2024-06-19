import { combineReducers } from "redux";
import loginPageReducer from "../pages/LoginPage/reducer";
import blogsPageReducer from "../pages/BlogPage/reducer";
import careersReducer from "../pages/CareersPage/reducer";
import aboutPageReducer from "../pages/AboutPage/reducer";
import sliderReducer from "../pages/SliderPage/reducer";
import usersReducer from "../pages/UsersPage/reducer";
import userRoleReducer from "../pages/UserRolePage/reducer";
import feedbackReducer from "../pages/FeedbackListPage/reducer";
import newslaterReducer from "../pages/NewsLattersPage/reducer";
import jobApplicationsReducer from "../pages/JobApplicationlistPage/reducer";
import dealinItemsPageReducer from "../pages/DealingItemPage/reducer";
import serviceRequestReducer from "../pages/ServiceInquiryPage/reducer";
import financeReducer from "../pages/FinancePage/reducer";
import socialReducer from "../pages/SocialMediaPage/reducer";
import directorPageReducer from "../pages/DirectorPage/reducer";
import constructionPageReducer from "../pages/ConstructionPage/reducer";
import teamMembersReducer from "../pages/TeamsPage/reducer";
import contactUsPageReducer from "../pages/ContactUsPage/reducer";
import siteVisitPageReducer from "../pages/SiteVisitPage/reducer";
import inquiryPageReducer from "../pages/InquiryListPage/reducer";

const createReducer = () => {
  const rootReducer = combineReducers({
    loginPageReducer: loginPageReducer,
    blogsPageReducer: blogsPageReducer,
    careersReducer: careersReducer,
    aboutPageReducer: aboutPageReducer,
    sliderReducer: sliderReducer,
    usersReducer: usersReducer,
    userRoleReducer: userRoleReducer,
    feedbackReducer: feedbackReducer,
    newslaterReducer: newslaterReducer,
    jobApplicationsReducer: jobApplicationsReducer,
    dealinItemsPageReducer: dealinItemsPageReducer,
    serviceRequestReducer: serviceRequestReducer,
    financeReducer: financeReducer,
    socialReducer: socialReducer,
    directorPageReducer: directorPageReducer,
    constructionPageReducer: constructionPageReducer,
    teamMembersReducer: teamMembersReducer,
    contactUsPageReducer: contactUsPageReducer,
    siteVisitPageReducer: siteVisitPageReducer,
    inquiryPageReducer:inquiryPageReducer
  });
  return rootReducer;
};

export default createReducer;
