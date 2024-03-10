import React, { lazy, Suspense } from "react";
import { Outlet, useLocation, useRoutes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SideBaar from "../components/SideBaar";
import AppBaar from "../components/SideBaar/Components/index";
import { useMediaQuery } from "@mui/material";
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const DashBoardPage = lazy(() => import("../pages/DashBoardPage"));

const AppRoutes = () => {
  const isMobileScreen = useMediaQuery('(max-width:1000px)');
  const locatinkn = useLocation();
  const element = useRoutes([
    { path: "/", element: <DashBoardPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/sign-up", element: <RegistrationPage /> },
  ]);

  if(locatinkn.pathname==="/login"||locatinkn.pathname==="/sign-up"){
    return (<Suspense
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
    </Suspense>)
  }else{
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
      <Box sx={{ display: "flex", backgroundColor: "#f1f5f9" }}>
        <AppBaar />{console.log("isMobileScreen",isMobileScreen)}
        {!isMobileScreen&&<SideBaar/>}
        {element}
      </Box>
      </Suspense>
    );
  }
};

export default AppRoutes;
