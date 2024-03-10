import * as React from "react";
import "./index.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { sidebaarRoutes } from "./Constants";
import { useEffect } from "react";
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

export default function SideBaar() {
  const navigate = useNavigate();
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

  const handleRedirect = (props) => {
    navigate(props);
  };

  const handleToggleDropdown = (title) => {
    const newList = SideBarItems?.map((item) => {
      const updatedMenus = item.menus.map((menuItem) => ({
        ...menuItem,
        isSub: title === menuItem.title ? !menuItem.isSub : false,
        arrow:
          title === menuItem.title && !menuItem.isSub ? (
            <FaAngleUp />
          ) : (
            <FaAngleDown />
          ),
      }));
      return { ...item, menus: updatedMenus };
    });
    setSideBarItems(newList);
  };

  useEffect(() => {
    const newList = SideBarItems?.map((item) => {
      const updatedMenus = item.menus.map((menuItem) => {
        const pathNames = menuItem?.subMenu?.map(
          (subItems) => subItems.pathname
        );
        return {
          ...menuItem,
          isSub: pathNames?.includes(location.pathname),
          arrow: pathNames?.includes(location.pathname) ? (
            <FaAngleUp />
          ) : (
            <FaAngleDown />
          ),
        };
      });
      return { ...item, menus: updatedMenus };
    });
    setSideBarItems(newList);
  }, []);

  return (
    <Drawer variant="permanent" className="drawer-box" open={true}>
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
              <React.Fragment>
                <Box disablePadding sx={{ display: "block" }}>
                  <Box
                    onClick={() => {
                      if (menuItem.isSub || menuItem?.subMenu) {
                        handleToggleDropdown(menuItem.title);
                      } else {
                        handleRedirect(menuItem.pathname);
                      }
                    }}
                    className={`${
                      location.pathname === menuItem.pathname
                        ? "active main-menus"
                        : "main-menus"
                    }`}
                    sx={{
                      minHeight: 45,
                      justifyContent: "initial",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      mx: 2.5,
                      px: 2.5,
                    }}
                  >
                    {menuItem.icon}
                    <Typography variant="p" className="sidebarlist">
                      {menuItem.title}
                      {menuItem.subMenu?.length ? menuItem?.arrow : ""}
                    </Typography>
                  </Box>
                  <Box
                    className="sub-menu-box"
                    sx={{
                      mx: 2.5,
                      px: 2.5,
                    }}
                  >
                    {menuItem.isSub &&
                      menuItem.subMenu?.map((subMenuItem) => (
                        <Box
                          className="sub-menus"
                          id={subMenuItem.pathname}
                          sx={{
                            minHeight: 35,
                            justifyContent: "initial",
                            display: "flex",
                            alignItems: "center",
                            px: 1,
                          }}
                          onClick={() => handleRedirect(subMenuItem.pathname)}
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
                </Box>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}
