import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { TiThMenu } from "react-icons/ti";
import ProfileImage from "../../../assets/icons/profile-image.jpg";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { grey } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { IoLogOut, IoReorderThree } from "react-icons/io5";
import { useEffect } from "react";
import { sidebaarRoutes } from "../Constants";
import { useLocation, useNavigate } from "react-router-dom/dist";
import { useState } from "react";
import { Drawer, useMediaQuery } from "@mui/material";
import SideBaar from "..";
import { getLocalStorageData } from "../../../utils/auth";

const drawerWidth = 240;

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background-color: #ffffff30;
    border-radius: 5px;
  }

  &:active {
    background-color: #ffffff30;
    border-radius: 5px;
  }

  &:focus-visible {
    background-color: #ffffff30;
    border-radius: 5px;
  }
  `
);

const Listbox = styled("ul")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background-color: #123e4f;
  z-index: 1;
  `
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  user-select: none;
  display: flex;

  &:last-of-type {
    border-bottom: none;
  }

  &:focus {
    background-color: #ffffff0d;
  }
  `
);

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
  const isMobileScreen = useMediaQuery("(max-width:1000px)");
  const [sideDrawer, setSideDrower] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [pageName, setPageName] = useState("Dashboard");
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const createHandleMenuClick = (menuItem) => {
    if (menuItem === "Log out") {
      localStorage.clear();
      navigate("/login");
    }
    return () => {
      // console.log(`Clicked on ${menuItem}`);
    };
  };
  const handleSideBaar = () => {
    setSideDrower(!sideDrawer);
  };

  useEffect(() => {
    let title = {};
    sidebaarRoutes.find((mainItem) => {
      mainItem.menus.find((item) => {
        if (location.pathname === item.pathname) {
          title = { mainTitle: item?.title };
        } else {
          item?.subMenu?.map((subItem) => {
            if (subItem.pathname === location.pathname) {
              title = { mainTitle: item?.title, subTitle: subItem?.title };
            }
          });
        }
      });
    });
    setPageName(title);
  }, [location.pathname]);

  const user = getLocalStorageData();

  return (
    <>
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
            <div className="flex items-center">
              {isMobileScreen && (
                <IoReorderThree
                  onClick={handleSideBaar}
                  size={30}
                  className="three-baar-icon"
                />
              )}
              <span className="bread-crumb-first">{pageName?.mainTitle}</span>
              {pageName?.subTitle ? (
                <h2 className="h2">{"   >   " + pageName?.subTitle}</h2>
              ) : (
                ""
              )}
            </div>
          </Box>
          <Dropdown>
            <MenuButton className="account-box">
              <div
                className="account-image"
                style={{
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  backgroundImage: `url(${ProfileImage})`,
                }}
              ></div>
              <div className="account-desc">
                <span className="account-heading w-full">
                  {user?.user?.name}
                </span>
                <span className="account-sub w-full">Co-founder</span>
              </div>
            </MenuButton>
            <Menu slots={{ listbox: Listbox }}>
              <MenuItem onClick={() => createHandleMenuClick("Log out")}>
                <IoLogOut size={22} className="mr-2" />
                Log out
              </MenuItem>
            </Menu>
          </Dropdown>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={sideDrawer} onClose={handleSideBaar}>
        <SideBaar
          handleCloseDrawer={() => {
            setSideDrower(false);
          }}
        />
      </Drawer>
    </>
  );
}
