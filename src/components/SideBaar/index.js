import * as React from "react";
import "./index.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { sidebaarRoutes } from "./Constants";
// import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBaar(props) {
  const [open, setOpen] = React.useState(false);
  const [dropDown, setDropdown] = React.useState(false);
  const [SideBarItems, setSideBarItems] = React.useState(sidebaarRoutes);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggleDropdown = (title) => {
    const newList = SideBarItems?.map((item) => {
      const updatedMenus = item.menus.map((menuItem) => ({
        ...menuItem,
        isSub: title === menuItem.title ? !menuItem.isSub : false,
      }));
      return { ...item, menus: updatedMenus };
    });
    setSideBarItems(newList);
  };

  return (
    <Drawer variant="permanent" open={true}>
      <Box className="px-3 py-5 mt-4">
        <h2 className="w-full font-bold text-xl">Vishal Construction</h2>
      </Box>
      <List>
        {SideBarItems?.map((item) => (
          <React.Fragment key={item.title}>
            <Typography className="w-full text-left pl-4 sidebar-label">
              {item.title}
            </Typography>
            {item.menus?.map((menuItem) => (
              <React.Fragment key={menuItem.title}>
                <Box disablePadding sx={{ display: "block" }}>
                  <Box
                    onClick={() => handleToggleDropdown(menuItem.title)}
                    className={`${
                      location.pathname === menuItem.pathname ? "active" : ""
                    }`}
                    sx={{
                      minHeight: 48,
                      justifyContent: "initial",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      px: 2.5,
                    }}
                  >
                    {menuItem.icon}
                    <Typography variant="p" className="sidebarlist">
                      {menuItem.title}
                      {menuItem.subMenu?.length ? <FaAngleDown /> : ""}
                    </Typography>
                  </Box>
                  {menuItem.isSub &&
                    menuItem.subMenu?.map((subMenuItem) => (
                      <Box
                        key={subMenuItem.title}
                        className="sub-menus"
                        sx={{
                          minHeight: 48,
                          justifyContent: "initial",
                          display: "flex",
                          alignItems: "center",
                          px: 3.5,
                        }}
                      >
                        {subMenuItem.icon}
                        <Typography
                          variant="p"
                          className="sub-sidebarlist"
                          sx={
                            location.pathname === menuItem.pathname
                              ? { color: "#000000" }
                              : { color: "#687693" }
                          }
                        >
                          {subMenuItem.title}
                        </Typography>
                      </Box>
                    ))}
                </Box>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}
