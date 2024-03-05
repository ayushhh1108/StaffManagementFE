import React, { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));

const AppRoutes = () => {
  const element = useRoutes([
    { path: "/", element: <LoginPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/sign-up", element: <RegistrationPage /> },
  ]);
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
          <CircularProgress style={{ color: "#1b6f58" }} />
        </Box>
      }
    >
      {element}
    </Suspense>
  );
};

export default AppRoutes;
