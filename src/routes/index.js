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
