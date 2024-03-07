import { FaChartBar } from "react-icons/fa6";
import { BsMenuAppFill, BsMenuButtonFill, BsMenuButtonWideFill } from "react-icons/bs";

export const sidebaarRoutes = [
  {
    title: "Dashboard",
    icon: <FaChartBar className="side-baar-icon" />,
    pathname: "/",
  },
  {
    title: "Menu",
    icon: <BsMenuButtonWideFill className="side-baar-icon" />,
    pathname: "/menu",
    isSub: false,
    subMenu: [
      {
        title: "Add Menu",
        icon: <BsMenuButtonFill className="side-baar-icon" />,
        pathname: "/menu",
      },
      {
        title: "Menu List",
        icon: <BsMenuAppFill className="side-baar-icon" />,
        pathname: "/menu",
      },
    ],
  },
  {
    title: "List",
    icon: <FaChartBar className="side-baar-icon" />,
    pathname: "/list",
  },
  {
    title: "User",
    icon: <FaChartBar className="side-baar-icon" />,
    pathname: "/menu",
    isSub: false,
    subMenu: [
      {
        title: "Add Menu",
        icon: <FaChartBar className="side-baar-icon" />,
        pathname: "/menu",
      },
      {
        title: "Menu List",
        icon: <FaChartBar className="side-baar-icon" />,
        pathname: "/menu",
      },
    ],
  },
];
