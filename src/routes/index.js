import React, { lazy, Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SideBaar from "../components/SideBaar";
import AppBaar from "../components/SideBaar/Components/index";
import { useMediaQuery } from "@mui/material";
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const DashBoardPage = lazy(() => import("../pages/DashBoardPage"));
const MenuPage = lazy(() => import("../pages/MenuPage"));
const AddMenuPage = lazy(() => import("../pages/AddMenuPage"));
const AddBlogPage = lazy(() => import("../pages/AddBlogPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const AddSliderPage = lazy(() => import("../pages/AddSliderPage"));
const SliderPage = lazy(() => import("../pages/SliderPage"));
const AddAboutPage = lazy(() => import("../pages/AddAboutPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const AddUserPage = lazy(() => import("../pages/AddUsersPage"));
const UsersPage = lazy(() => import("../pages/UsersPage"));
const AddUserRolePage = lazy(() => import("../pages/AddUserRolePage"));
const UserRolePage = lazy(() => import("../pages/UserRolePage"));
const AccountPage = lazy(() => import("../pages/AccountPage"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));
const SiteVisitPage = lazy(() => import("../pages/SiteVisitPage"));
const InquiryListPage = lazy(() => import("../pages/InquiryListPage"));
const CallbackListPage = lazy(() => import("../pages/CallbackPage"));
const AddFeedbackPage = lazy(() => import("../pages/AddFeedbackPage"));
const FeedbackListPage = lazy(() => import("../pages/FeedbackListPage"));
const NewsLatterPage = lazy(() => import("../pages/NewsLattersPage"));
const AddCareerPage = lazy(() => import("../pages/AddCareerPage"));
const CareersPage = lazy(() => import("../pages/CareersPage"));
const JobApplicationlistPage = lazy(() => import("../pages/JobApplicationlistPage"));
const ReviewsPage = lazy(() => import("../pages/ReviewsPage"));
const BookingsPage = lazy(() => import("../pages/BookingsPage"));
const AddPropertyPage = lazy(() => import("../pages/AddPropertyPage"));
const PropertyListPage = lazy(() => import("../pages/PropertyListPage"));
const AddDealingPage = lazy(() => import("../pages/AddDealingPage"));
const AddDealingItemPage = lazy(() => import("../pages/AddDealingItemPage"));
const DealingPage = lazy(() => import("../pages/DealingPage"));
const DealingItemPage = lazy(() => import("../pages/DealingItemPage"));
const AddServicePage = lazy(() => import("../pages/AddServicePage"));
const AddServiceItemPage = lazy(() => import("../pages/AddServiceItemPage"));
const ServiceItemPage = lazy(() => import("../pages/ServiceItemPage"));
const ServicePage = lazy(() => import("../pages/ServicePage"));
const ServiceInquiryPage = lazy(() => import("../pages/ServiceInquiryPage"));
const AddFinancePage = lazy(() => import("../pages/AddFinancePage"));
const AddSupplierPage = lazy(() => import("../pages/AddSupplierPage"));

const AppRoutes = () => {
  const isMobileScreen = useMediaQuery("(max-width:1000px)");
  const location = useLocation();
  const element = useRoutes([
    { path: "/", element: <DashBoardPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/sign-up", element: <RegistrationPage /> },
    { path: "/add-menu", element: <AddMenuPage /> },
    { path: "/menu-list", element: <MenuPage /> },
    { path: "/add-blog", element: <AddBlogPage /> },
    { path: "/blog-list", element: <BlogPage /> },
    { path: "/add-slider", element: <AddSliderPage /> },
    { path: "/slider-list", element: <SliderPage /> },
    { path: "/add-about-page", element: <AddAboutPage /> },
    { path: "/about-page-list", element: <AboutPage /> },
    { path: "/add-user", element: <AddUserPage /> },
    { path: "/user-list", element: <UsersPage /> },
    { path: "/add-role", element: <AddUserRolePage /> },
    { path: "/roles-list", element: <UserRolePage /> },
    { path: "/account", element: <AccountPage /> },
    { path: "/contact-us", element: <ContactUsPage /> },
    { path: "/site-visit", element: <SiteVisitPage /> },
    { path: "/inquiries", element: <InquiryListPage /> },
    { path: "/callback", element: <CallbackListPage /> },
    { path: "/add-feedback", element: <AddFeedbackPage /> },
    { path: "/feedback-list", element: <FeedbackListPage /> },
    { path: "/newsletters", element: <NewsLatterPage /> },
    { path: "/add-career", element: <AddCareerPage /> },
    { path: "/career-list", element: <CareersPage /> },
    { path: "/job-app", element: <JobApplicationlistPage /> },
    { path: "/review", element: <ReviewsPage /> },
    { path: "/bookings", element: <BookingsPage /> },
    { path: "/add-property", element: <AddPropertyPage /> },
    { path: "/property-list", element: <PropertyListPage /> },
    { path: "/add-dealing", element: <AddDealingPage /> },
    { path: "/add-dealing-item", element: <AddDealingItemPage /> },
    { path: "/dealing-list", element: <DealingPage /> },
    { path: "/dealing-item-list", element: <DealingItemPage /> },
    { path: "/add-service", element: <AddServicePage /> },
    { path: "/add-service-item", element: <AddServiceItemPage /> },
    { path: "/service-list", element: <ServicePage /> },
    { path: "/service-item-list", element: <ServiceItemPage /> },
    { path: "/service-inquiries-list", element: <ServiceInquiryPage /> },
    { path: "/add-finance", element: <AddFinancePage /> },
    { path: "/add-supplier", element: <AddSupplierPage /> },
  ]);
  
  const isLoginSignup = location.pathname === "/login" || location.pathname === "/sign-up";

  return (
    <Suspense
      fallback={
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress style={{ color: "#164e63" }} />
        </Box>
      }
    >
      {isLoginSignup ? (
        element
      ) : (
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            width: "100%",
            backgroundColor: "#f1f5f9",
          }}
        >
          <AppBaar />
          {!isMobileScreen && <SideBaar />}
          {element}
        </Box>
      )}
    </Suspense>
  );
};

export default AppRoutes;
