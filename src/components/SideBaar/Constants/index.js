import {
  FaBlog,
  FaBlogger,
  FaBloggerB,
  FaChartBar,
  FaIdeal,
  FaList,
  FaMoneyBillWheat,
  FaRectangleList,
  FaRegAddressCard,
  FaSitemap,
  FaUserTie,
} from "react-icons/fa6";
import { BsPersonBadge, BsPersonFillAdd } from "react-icons/bs";
import {
  RiMoneyCnyCircleFill,
  RiMoneyDollarBoxFill,
  RiUserAddFill,
} from "react-icons/ri";
import { BiSolidBookContent, BiSolidUserDetail } from "react-icons/bi";
import { FaChalkboardUser } from "react-icons/fa6";
import { TbGitPullRequest, TbSocial, TbUserCog } from "react-icons/tb";
import { PiOfficeChairDuotone, PiUserListFill } from "react-icons/pi";
import {
  MdConnectWithoutContact,
  MdContentPasteGo,
  MdFeedback,
  MdMiscellaneousServices,
  MdNewspaper,
  MdOutlineDesignServices,
  MdOutlinePreview,
  MdOutlineSupervisedUserCircle,
  MdOutlineSupervisorAccount,
  MdPhoneCallback,
} from "react-icons/md";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import {
  AiFillPropertySafety,
  AiFillSliders,
  AiOutlineSliders,
  AiTwotonePropertySafety,
} from "react-icons/ai";
import {
  HiInformationCircle,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import {
  IoConstructOutline,
  IoInformationOutline,
  IoPeopleCircleSharp,
} from "react-icons/io5";
import { CgFeed } from "react-icons/cg";
import { SiBuzzfeed, SiCraftcms, SiMicrosoftteams } from "react-icons/si";
import { PiOfficeChairFill } from "react-icons/pi";
import { TbBrandBooking } from "react-icons/tb";
import { VscSymbolProperty } from "react-icons/vsc";
import { BiCodeAlt } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import {
  HiClipboardDocumentList,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import { IoIosPeople, IoMdConstruct } from "react-icons/io";
import { LuConstruction } from "react-icons/lu";
import {
  GiMoneyStack,
  GiPayMoney,
  GiTakeMyMoney,
  GiTeamDowngrade,
  GiTeamIdea,
} from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";

export const sidebaarRoutes = [
  // Content Management
  {
    title: "Content Management",
    menus: [
      {
        title: "Dashboard",
        icon: <FaChartBar className="side-baar-icon" />,
        pathname: "/dashboard",
      },
      // {
      //   title: "Menu",
      //   icon: <BsMenuButtonWideFill className="side-baar-icon" />,
      //   pathname: "/menu",
      //   isSub: false,
      //   arrow: <FaAngleDown />,
      //   subMenu: [
      //     {
      //       title: "Add Menu",
      //       icon: <BsMenuButtonFill className="side-baar-icon" />,
      //       pathname: "/add-menu",
      //     },
      //     {
      //       title: "Menu List",
      //       icon: <BsMenuAppFill className="side-baar-icon" />,
      //       pathname: "/menu-list",
      //     },
      //   ],
      // },
      {
        title: "Staff",
        icon: <FaBlog className="side-baar-icon" />,
        pathname: "/staff",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Staff",
            icon: <FaBlogger className="side-baar-icon" />,
            pathname: "/add-staff",
          },
          {
            title: "Staff List",
            icon: <FaBloggerB className="side-baar-icon" />,
            pathname: "/staff-list",
          },
        ],
      },
    ],
  },
  // Company Information
  {
    title: "Company Information",
    menus: [
      {
        title: "Site address",
        icon: <FaRegAddressCard className="side-baar-icon" />,
        pathname: "/site-address",
      },
      {
        title: "Social Media",
        icon: <TbSocial className="side-baar-icon" />,
        pathname: "/social",
      },
      {
        title: "Director",
        icon: <BsPersonBadge className="side-baar-icon" />,
        pathname: "/director",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add director",
            icon: <BsPersonFillAdd className="side-baar-icon" />,
            pathname: "/add-director",
          },
          {
            title: "Director List",
            icon: <PiUserListFill className="side-baar-icon" />,
            pathname: "/director-list",
          },
        ],
      },

      {
        title: "Team",
        icon: <GiTeamIdea className="side-baar-icon" />,
        pathname: "/team",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Team Member",
            icon: <GiTeamDowngrade className="side-baar-icon" />,
            pathname: "/add-team",
          },
          {
            title: "Team List",
            icon: <SiMicrosoftteams className="side-baar-icon" />,
            pathname: "/team-list",
          },
        ],
      },
      // {
      //   title: "Invest with Us",
      //   icon: <GiPayMoney className="side-baar-icon" />,
      //   pathname: "/invest",
      //   isSub: false,
      //   arrow: <FaAngleDown />,
      //   subMenu: [
      //     {
      //       title: "Add Invest with Us",
      //       icon: <GiTakeMyMoney className="side-baar-icon" />,
      //       pathname: "/add-invest",
      //     },
      //     {
      //       title: "Invest with Us List",
      //       icon: <GiMoneyStack className="side-baar-icon" />,
      //       pathname: "/invest-list",
      //     },
      //   ],
      // },
    ],
  },
];
