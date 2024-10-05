import React, { lazy, Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SideBaar from "../components/SideBaar";
import AppBaar from "../components/SideBaar/Components/index";
import { useMediaQuery } from "@mui/material";
import { ProtectedRoute } from "../utils/auth";
import Loader from "../components/Loader";
import AddStaffPage from "../pages/AddStaffPage";
import StaffListPage from "../pages/StaffListPage";
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const DashBoardPage = lazy(() => import("../pages/DashBoardPage"));

const AppRoutes = () => {
  const isMobileScreen = useMediaQuery("(max-width:1000px)");
  const location = useLocation();
  const element = useRoutes([
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <DashBoardPage />
        </ProtectedRoute>
      ),
    }, // Protected route
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <DashBoardPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/add-staff",
      element: (
        <ProtectedRoute>
          <AddStaffPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/staff-list",
      element: (
        <ProtectedRoute>
          <StaffListPage />
        </ProtectedRoute>
      ),
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/sign-up", element: <RegistrationPage /> },
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
