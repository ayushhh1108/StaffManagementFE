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
import contactUsDataReducer from "../pages/ContactUsPage/reducer";
import siteVisitDataReducer from "../pages/SiteVisitPage/reducer";
import enquiryDataReducer from "../pages/InquiryListPage/reducer";
import callBackDataReducer from "../pages/CallbackPage/reducer";
import reviewDataReducer from "../pages/ReviewsPage/reducer";
import bookingDataReducer from "../pages/BookingsPage/reducer";
import siteAddressReducer from "../pages/SiteAddressPage/reducer";
import supplierDataReducer from "../pages/SupplierPage/reducer";
import legacyDataReducer from "../pages/LegacyPage/reducer";
import dealInPageReducer from "../pages/DealingPage/reducer";

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
    contactUsDataReducer: contactUsDataReducer,
    siteVisitDataReducer: siteVisitDataReducer,
    enquiryDataReducer: enquiryDataReducer,
    callBackDataReducer: callBackDataReducer,
    reviewDataReducer: reviewDataReducer,
    bookingDataReducer: bookingDataReducer,
    siteAddressReducer: siteAddressReducer,
    supplierDataReducer: supplierDataReducer,
    legacyDataReducer: legacyDataReducer,
    dealInPageReducer: dealInPageReducer
  });
  return rootReducer;
};

export default createReducer;
