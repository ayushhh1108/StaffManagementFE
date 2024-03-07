import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { TiThMenu } from "react-icons/ti";
import ProfileImage from "../../../assets/icons/profile-image.jpg";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBaar() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar className="top-baar" position="fixed" open={true}>
      <Toolbar className="header-toolbar">
        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              display: "none",
            }}
          >
            <TiThMenu />
          </IconButton>
          <h2 className="font-bold text-xl">Dashboard</h2>
        </Box>
        <Box className="account-box">
          <div
            className="account-image"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "5px",
              backgroundImage: `url(${ProfileImage})`,
            }}
          ></div>
          <div className="account-desc">
            <span className="account-heading w-full">Vishal</span>
            <span className="account-sub w-full">Co-founder</span>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
