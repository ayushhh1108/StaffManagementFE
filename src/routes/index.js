import React, { lazy, Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SideBaar from "../components/SideBaar";
import AppBaar from "../components/SideBaar/Components/index";
import { useMediaQuery } from "@mui/material";
import { ProtectedRoute } from "../utils/auth";
import Loader from "../components/Loader";
import SubCMSPage from "../pages/SubCMSPage";
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
const JobApplicationlistPage = lazy(() =>
  import("../pages/JobApplicationlistPage")
);
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
const FinancePage = lazy(() => import("../pages/FinancePage"));
const SupplierPage = lazy(() => import("../pages/SupplierPage"));
const AddWorldOfVishal = lazy(() => import("../pages/AddWorldOfVishal"));
const WorldofVishal = lazy(() => import("../pages/WorldofVishal"));
const SiteAddressPage = lazy(() => import("../pages/SiteAddressPage"));
const SocialMediaPage = lazy(() => import("../pages/SocialMediaPage"));
const AddDirectorPage = lazy(() => import("../pages/AddDirectorPage"));
const AddConstructionPage = lazy(() => import("../pages/AddConstructionPage"));
const AddTeamPage = lazy(() => import("../pages/AddTeamPage"));
const AddInvestWithUsPage = lazy(() => import("../pages/AddInvestWithUsPage"));
const AddCMSPage = lazy(() => import("../pages/AddCMSPage"));
const DirectorPage = lazy(() => import("../pages/DirectorPage"));
const ConstructionsPage = lazy(() => import("../pages/ConstructionPage"));
const TeamsPage = lazy(() => import("../pages/TeamsPage"));
const InvestWithUsListPage = lazy(() =>
  import("../pages/InvestWithUsListPage")
);
const CMSListPage = lazy(() => import("../pages/CMSListPage"));
const LegacyPage = lazy(() => import("../pages/LegacyPage"));

const AppRoutes = () => {
  const isMobileScreen = useMediaQuery("(max-width:1000px)");
  const location = useLocation();
  const element = useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <DashBoardPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    { path: "/login", element: <LoginPage /> },
    { path: "/sign-up", element: <RegistrationPage /> },
    {
      path: "/add-menu",
      element: (
        <ProtectedRoute>
          <AddMenuPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/menu-list",
      element: (
        <ProtectedRoute>
          <MenuPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-blog",
      element: (
        <ProtectedRoute>
          <AddBlogPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/blog-list",
      element: (
        <ProtectedRoute>
          <BlogPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-slider",
      element: (
        <ProtectedRoute>
          <AddSliderPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/slider-list",
      element: (
        <ProtectedRoute>
          <SliderPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-about-page",
      element: (
        <ProtectedRoute>
          <AddAboutPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/about-page-list",
      element: (
        <ProtectedRoute>
          <AboutPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-user",
      element: (
        <ProtectedRoute>
          <AddUserPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/user-list",
      element: (
        <ProtectedRoute>
          <UsersPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-role",
      element: (
        <ProtectedRoute>
          <AddUserRolePage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/roles-list",
      element: (
        <ProtectedRoute>
          <UserRolePage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/account",
      element: (
        <ProtectedRoute>
          <AccountPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/contact-us",
      element: (
        <ProtectedRoute>
          <ContactUsPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/site-visit",
      element: (
        <ProtectedRoute>
          <SiteVisitPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/inquiries",
      element: (
        <ProtectedRoute>
          <InquiryListPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/callback",
      element: (
        <ProtectedRoute>
          <CallbackListPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-feedback",
      element: (
        <ProtectedRoute>
          <AddFeedbackPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/feedback-list",
      element: (
        <ProtectedRoute>
          <FeedbackListPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/newsletters",
      element: (
        <ProtectedRoute>
          <NewsLatterPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-career",
      element: (
        <ProtectedRoute>
          <AddCareerPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/career-list",
      element: (
        <ProtectedRoute>
          <CareersPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/job-app",
      element: (
        <ProtectedRoute>
          <JobApplicationlistPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/review",
      element: (
        <ProtectedRoute>
          <ReviewsPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/bookings",
      element: (
        <ProtectedRoute>
          <BookingsPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-property",
      element: (
        <ProtectedRoute>
          <AddPropertyPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/property-list",
      element: (
        <ProtectedRoute>
          <PropertyListPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-dealing",
      element: (
        <ProtectedRoute>
          <AddDealingPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-dealing-item",
      element: (
        <ProtectedRoute>
          <AddDealingItemPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/dealing-list",
      element: (
        <ProtectedRoute>
          <DealingPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/dealing-item-list",
      element: (
        <ProtectedRoute>
          <DealingItemPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-service",
      element: (
        <ProtectedRoute>
          <AddServicePage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-service-item",
      element: (
        <ProtectedRoute>
          <AddServiceItemPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/service-list",
      element: (
        <ProtectedRoute>
          <ServicePage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/service-item-list",
      element: (
        <ProtectedRoute>
          <ServiceItemPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/service-inquiries-list",
      element: (
        <ProtectedRoute>
          <ServiceInquiryPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/finance",
      element: (
        <ProtectedRoute>
          <AddFinancePage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-supplier",
      element: (
        <ProtectedRoute>
          <AddSupplierPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/finance-list",
      element: (
        <ProtectedRoute>
          <FinancePage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/supplier-list",
      element: (
        <ProtectedRoute>
          <SupplierPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-worldofvishal",
      element: (
        <ProtectedRoute>
          <AddWorldOfVishal />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/worldofvishal-list",
      element: (
        <ProtectedRoute>
          <WorldofVishal />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/site-address",
      element: (
        <ProtectedRoute>
          <SiteAddressPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/social",
      element: (
        <ProtectedRoute>
          <SocialMediaPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-director",
      element: (
        <ProtectedRoute>
          <AddDirectorPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-construction-process",
      element: (
        <ProtectedRoute>
          <AddConstructionPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-team",
      element: (
        <ProtectedRoute>
          <AddTeamPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-invest",
      element: (
        <ProtectedRoute>
          <AddInvestWithUsPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/add-cms",
      element: (
        <ProtectedRoute>
          <AddCMSPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/director-list",
      element: (
        <ProtectedRoute>
          <DirectorPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/construction-process-list",
      element: (
        <ProtectedRoute>
          <ConstructionsPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/team-list",
      element: (
        <ProtectedRoute>
          <TeamsPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/invest-list",
      element: (
        <ProtectedRoute>
          <InvestWithUsListPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/cms-list",
      element: (
        <ProtectedRoute>
          <CMSListPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/legacy",
      element: (
        <ProtectedRoute>
          <LegacyPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/sub-cms",
      element: (
        <ProtectedRoute>
          <SubCMSPage />
        </ProtectedRoute>
      ),
    }, // Protected route
  ]);

  const isLoginSignup =
    location.pathname === "/login" || location.pathname === "/sign-up";

  if (isLoginSignup) {
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
        {element}
      </Suspense>
    );
  } else {
    return (
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
        <Suspense fallback={Loader()}>{element}</Suspense>
      </Box>
    );
  }
};

export default AppRoutes;
