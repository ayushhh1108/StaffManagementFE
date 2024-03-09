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
import {
  BsMenuAppFill,
  BsMenuButtonFill,
  BsMenuButtonWideFill,
  BsPersonBadge,
  BsPersonFillAdd,
} from "react-icons/bs";
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
import { FcCallback } from "react-icons/fc";
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
        pathname: "/",
      },
      {
        title: "Menu",
        icon: <BsMenuButtonWideFill className="side-baar-icon" />,
        pathname: "/menu",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Menu",
            icon: <BsMenuButtonFill className="side-baar-icon" />,
            pathname: "/menu",
          },
          {
            title: "Menu List",
            icon: <BsMenuAppFill className="side-baar-icon" />,
            pathname: "/menu-list",
          },
        ],
      },
      {
        title: "Blog",
        icon: <FaBlog className="side-baar-icon" />,
        pathname: "/menu",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Blog",
            icon: <FaBlogger className="side-baar-icon" />,
            pathname: "/add-blog",
          },
          {
            title: "Blog List",
            icon: <FaBloggerB className="side-baar-icon" />,
            pathname: "/blog-list",
          },
        ],
      },
      {
        title: "Slider",
        icon: <PiSlidersHorizontalBold className="side-baar-icon" />,
        pathname: "/menu",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Slider",
            icon: <AiFillSliders className="side-baar-icon" />,
            pathname: "/add-slider",
          },
          {
            title: "Slider List",
            icon: <AiOutlineSliders className="side-baar-icon" />,
            pathname: "/slider-list",
          },
        ],
      },
      {
        title: "About page",
        icon: <HiInformationCircle className="side-baar-icon" />,
        pathname: "/about-page",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add About page",
            icon: <IoInformationOutline className="side-baar-icon" />,
            pathname: "/add-about-page",
          },
          {
            title: "About page List",
            icon: <HiOutlineInformationCircle className="side-baar-icon" />,
            pathname: "/about-page-list",
          },
        ],
      },
    ],
  },
  // User Management
  {
    title: "User Management",
    menus: [
      {
        title: "User",
        icon: <FaUserTie className="side-baar-icon" />,
        pathname: "/user",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add User",
            icon: <RiUserAddFill className="side-baar-icon" />,
            pathname: "/add-user",
          },
          {
            title: "User List",
            icon: <BiSolidUserDetail className="side-baar-icon" />,
            pathname: "/user-list",
          },
        ],
      },
      {
        title: "User Role",
        icon: <FaChalkboardUser className="side-baar-icon" />,
        pathname: "/menu",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Role",
            icon: <TbUserCog className="side-baar-icon" />,
            pathname: "/add-role",
          },
          {
            title: "Role List",
            icon: <PiUserListFill className="side-baar-icon" />,
            pathname: "/roles-list",
          },
        ],
      },
      {
        title: "Account",
        icon: <MdOutlineSupervisorAccount className="side-baar-icon" />,
        pathname: "/account",
      },
    ],
  },
  // Contact & Communication
  {
    title: "Contact & Communication",
    menus: [
      {
        title: "Contact us",
        icon: <MdConnectWithoutContact className="side-baar-icon" />,
        pathname: "/contact-us",
      },
      {
        title: "Site visit",
        icon: <FaSitemap className="side-baar-icon" />,
        pathname: "/site-visit",
      },
      {
        title: "Inquiries",
        icon: <HiOutlineInformationCircle className="side-baar-icon" />,
        pathname: "/inquiries",
      },
      {
        title: "Callback",
        icon: <MdPhoneCallback className="side-baar-icon" />,
        pathname: "/callback",
      },
      {
        title: "Feedback",
        icon: <MdFeedback className="side-baar-icon" />,
        pathname: "/feedback",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Feedback",
            icon: <SiBuzzfeed className="side-baar-icon" />,
            pathname: "/add-feedback",
          },
          {
            title: "Feedback List",
            icon: <CgFeed className="side-baar-icon" />,
            pathname: "/feedback-list",
          },
        ],
      },
      {
        title: "Newsletters",
        icon: <MdNewspaper className="side-baar-icon" />,
        pathname: "/newsletters",
      },
    ],
  },
  // Business Operations
  {
    title: "Business Operations",
    menus: [
      {
        title: "Career",
        icon: <PiOfficeChairFill className="side-baar-icon" />,
        pathname: "/career",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Career",
            icon: <PiOfficeChairDuotone className="side-baar-icon" />,
            pathname: "/add-career",
          },
          {
            title: "Career List",
            icon: <PiUserListFill className="side-baar-icon" />,
            pathname: "/career-list",
          },
          {
            title: "Job Application List",
            icon: <FaRectangleList className="side-baar-icon" />,
            pathname: "/job-app",
          },
        ],
      },
      {
        title: "Review",
        icon: <MdOutlinePreview className="side-baar-icon" />,
        pathname: "/review",
      },
      {
        title: "Bookings",
        icon: <TbBrandBooking className="side-baar-icon" />,
        pathname: "/bookings",
      },
      {
        title: "Property",
        icon: <AiFillPropertySafety className="side-baar-icon" />,
        pathname: "/property",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Property",
            icon: <VscSymbolProperty className="side-baar-icon" />,
            pathname: "/add-property",
          },
          {
            title: "Property List",
            icon: <AiTwotonePropertySafety className="side-baar-icon" />,
            pathname: "/property-list",
          },
        ],
      },
      {
        title: "Dealing In",
        icon: <FaIdeal className="side-baar-icon" />,
        pathname: "/dealing-in",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Dealing",
            icon: <BiCodeAlt className="side-baar-icon" />,
            pathname: "/add-dealing",
          },
          {
            title: "Dealing In List",
            icon: <FaList className="side-baar-icon" />,
            pathname: "/dealing-list",
          },
          {
            title: "Add Dealing Item",
            icon: <BiCodeAlt className="side-baar-icon" />,
            pathname: "/add-dealing-item",
          },
          {
            title: "Dealing Item List",
            icon: <FaList className="side-baar-icon" />,
            pathname: "/dealing-item-list",
          },
        ],
      },
      {
        title: "Service",
        icon: <MdMiscellaneousServices className="side-baar-icon" />,
        pathname: "/service",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Service",
            icon: <GrServices className="side-baar-icon" />,
            pathname: "/add-service",
          },
          {
            title: "Service List",
            icon: <HiClipboardDocumentList className="side-baar-icon" />,
            pathname: "/service-list",
          },
          {
            title: "Add Service Item",
            icon: <MdOutlineDesignServices className="side-baar-icon" />,
            pathname: "/add-service-item",
          },
          {
            title: "Service Item List",
            icon: <HiOutlineClipboardDocumentList className="side-baar-icon" />,
            pathname: "/service-item-list",
          },
          {
            title: "Service Inquiries List",
            icon: <TbGitPullRequest className="side-baar-icon" />,
            pathname: "/service-inquiries-list",
          },
        ],
      },
      {
        title: "Finance",
        icon: <FaMoneyBillWheat className="side-baar-icon" />,
        pathname: "/finance",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Finance",
            icon: <RiMoneyDollarBoxFill className="side-baar-icon" />,
            pathname: "/add-finance",
          },
          {
            title: "Finance List",
            icon: <RiMoneyCnyCircleFill className="side-baar-icon" />,
            pathname: "/finance-list",
          },
        ],
      },
      {
        title: "Supplier",
        icon: <MdOutlineSupervisedUserCircle className="side-baar-icon" />,
        pathname: "/supplier",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Supplier",
            icon: <TbUserCog className="side-baar-icon" />,
            pathname: "/add-supplier",
          },
          {
            title: "Supplier List",
            icon: <PiUserListFill className="side-baar-icon" />,
            pathname: "/supplier-list",
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
        title: "About us",
        icon: <IoIosPeople className="side-baar-icon" />,
        pathname: "/about-us",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add About us",
            icon: <IoPeopleCircleSharp className="side-baar-icon" />,
            pathname: "/add-about-us",
          },
          {
            title: "About us List",
            icon: <PiUserListFill className="side-baar-icon" />,
            pathname: "/about-us-list",
          },
        ],
      },
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
        title: "Construction Process",
        icon: <LuConstruction className="side-baar-icon" />,
        pathname: "/construction-process",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Construction Process",
            icon: <IoMdConstruct className="side-baar-icon" />,
            pathname: "/add-construction-process",
          },
          {
            title: "Construction Process List",
            icon: <IoConstructOutline className="side-baar-icon" />,
            pathname: "/construction-process-list",
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
      {
        title: "Invest with Us",
        icon: <GiPayMoney className="side-baar-icon" />,
        pathname: "/invest",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add Invest with Us",
            icon: <GiTakeMyMoney className="side-baar-icon" />,
            pathname: "/add-invest",
          },
          {
            title: "Invest with Us List",
            icon: <GiMoneyStack className="side-baar-icon" />,
            pathname: "/invest-list",
          },
        ],
      },
      {
        title: "CMS",
        icon: <SiCraftcms className="side-baar-icon" />,
        pathname: "/cms",
        isSub: false,
        arrow: <FaAngleDown />,
        subMenu: [
          {
            title: "Add CMS",
            icon: <MdContentPasteGo className="side-baar-icon" />,
            pathname: "/add-cms",
          },
          {
            title: "CMS List",
            icon: <BiSolidBookContent className="side-baar-icon" />,
            pathname: "/cms-list",
          },
        ],
      },
    ],
  },
];
