import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddProperty } from "./action";

export default function AddPropertyPageHooks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [clientData, setClientData] = useState({ iAm: "Owner" });
  const [allData, setAllData] = useState({ for: "sale" });
  const [propertyType, setPropertyType] = useState([]);
  const [totalFlatCount, setTotalFlatCount] = useState([]);
  const [otherSelects, setOtherSelects] = useState({});
  const isMobileScreen = useMediaQuery("(max-width:1000px)");
  const [radioButtonData, setRadioButtonData] = useState({
    possession_status: "under_construction",
  });
  const classes = {};
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [Features, setFeatures] = useState([
    { key: 1, value: "" },
    { key: 2 },
    { key: 3 },
  ]);

  const CommercialPlaces = [
    "Commercial Office Space",
    "Commercial Shop",
    "Commercial Showroom",
    "Commercial Land",
    "Warehouse/ Godown",
    "Industrial Shed",
  ];

  const IsIdealForBusiness = [
    "Commercial Office Space",
    "Commercial Shop",
    "Commercial Showroom",
  ];

  const RegulerFeatures = [
    "Flat/ Apartment",
    "Residential House",
    "Villa",
    "Farm House",
    "Pent house",
  ];

  const LandFeatures = [
    "Industrial Shed",
    "Agricultural Land",
    "Commercial Land",
    "Residential Land/ Plot",
  ];

  const CommercialOfficeFeatures = [
    "Warehouse/ Godown",
    "Commercial Office Space",
    "Commercial Shop",
    "Commercial Showroom",
  ];

  const housing = ["Residential House", "Farm House", "Villa"];
  const oneToTen = Array.from({ length: 10 }, (_, index) => String(index + 1));
  const twoHundredArray = Array.from({ length: 200 }, (_, index) => index + 1);

  const onTypeChange = (props) => {
    setClientData({ ...clientData, iAm: props.target.id });
    setData("iAm", props?.target?.id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelectChange = (event) => {
    const { value, name } = event.target;
    if (name === "pType") {
      setPropertyType([value]);
    } else if (name === "total_flats") {
      setTotalFlatCount([value]);
    } else {
      setOtherSelects({ ...otherSelects, [name]: [value] });
    }
    console.log("data", event, otherSelects);
    setData(name, value);
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setRadioButtonData({ ...radioButtonData, [name]: value });
    setAllData(name, value);
  };

  const handleInputsChange = (idOrEvent, val) => {
    const event = isEventBased(idOrEvent) ? idOrEvent : null;
    let key = event?.target?.id || idOrEvent;
    const isName = key?.target?.name;
    key =
      isName === "for"
        ? "for"
        : isName === "boundary_walls"
        ? "boundary_walls"
        : isName === "personal_washroom"
        ? "personal_washroom"
        : isName === "pantry_cafeteria"
        ? "pantry_cafeteria"
        : key;
    let value = event ? event.target.value : val;
    const isUpload =
      key === "mainImage" || key === "imageGallery" || key === "layoutPlan";
    value =
      isUpload && event
        ? event.target.files[0]
        : key === "is_corner_plot"
        ? idOrEvent?.target?.checked
        : value;
    console.log("idOrEvent", key, idOrEvent?.target?.checked);
    setData(key, value);
  };

  const isEventBased = (input) => !!input?.target?.id;

  const setData = (key, value) => {
    setAllData({ ...allData, [key]: value });
  };

  const handleDelete = (tagToDelete) => () => {
    setTags((tags) => tags.filter((tag) => tag !== tagToDelete));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
      e.preventDefault();
    }
  };

  const handleSubmit = () => {
    console.log("handleSubmit", allData, tags);
    let isFormValid = true;
    const payload = new FormData();
    const appendIfValue = (key, value) => {
      if (value !== undefined && value !== null) {
        payload.append(key, value);
      }
    };
    appendIfValue("iAm", clientData?.["iAm"]);
    appendIfValue("for", allData?.["for"]);
    appendIfValue("pType", allData?.["pType"]);
    appendIfValue("postingAs", clientData?.["iAm"]);
    appendIfValue("name", allData?.Name);
    appendIfValue("mobile", allData?.["Mobile"]);
    appendIfValue("email", allData?.["Email"]);
    appendIfValue("pCity", allData?.city);
    appendIfValue("locality", allData?.Locality);
    appendIfValue("nameOfProject", allData?.propertyTitle);
    tags?.map((item, index) => {
      appendIfValue(`propertyTag[${index}]`, item);
    });
    appendIfValue("propertyTitle", allData?.propertyTitle);
    appendIfValue("propertySubTitle", allData?.propertySubTitle);
    appendIfValue("description", allData?.editor_property_desc);
    appendIfValue("isNegotiate", allData?.is_price_negotiable === "on");
    appendIfValue("isPostPropertyAgree", allData?.post_confirmation === "on");
    appendIfValue(
      "isTermsAndConditionAgree",
      allData?.privacy_and_condition === "on"
    );
    appendIfValue("bookingPrice", allData?.token_amt);
    appendIfValue("expectedPrice", allData?.expected_price);
    appendIfValue("totalFlats", allData?.totalFlatCount);
    appendIfValue("balconies", allData?.Balconies);
    appendIfValue("bedrooms", allData?.Bedrooms);
    appendIfValue("floorNo", allData?.floor_no);
    appendIfValue("totalFloors", allData?.total_floors);
    appendIfValue("furnishedStatus", allData?.furnished_status);
    appendIfValue("bathrooms", allData?.Bathrooms);
    appendIfValue(
      "FloorsAllowedForConstruction",
      allData?.allowed_floor_contruction
    );
    appendIfValue("WidthOfRoadInM", allData?.width_of_road_facing_plot);
    appendIfValue("WidthOfRoad", allData?.width_of_open_side);
    appendIfValue("NoOfOpenSides", allData?.no_of_open_sides);
    appendIfValue("isBoundaryWall", allData?.boundary_walls);

    appendIfValue("plotArea", allData?.plot_area);
    appendIfValue("plotLength", allData?.plot_length);
    appendIfValue("isCornerPlot", allData?.is_corner_plot === "on");
    appendIfValue("plotBreadth", allData?.plot_breadth);
    appendIfValue("superArea", allData?.super_area);
    appendIfValue("carpetArea", allData?.carpet_area);

    appendIfValue("possessionStatus", allData?.possession_status);
    appendIfValue("availableFromMonth", allData?.Month);
    appendIfValue("availableFromYear", allData?.Year);

    Features?.map((item, index) => {
      appendIfValue(`amenities[${index}]`, allData[`Property_Feature${index}`]);
    });

    appendIfValue("address[city]", allData?.City);
    appendIfValue("address[zip]", allData?.Zipcode);
    appendIfValue("address[state]", allData?.state);
    appendIfValue("address[street]", allData?.street);
    appendIfValue("mainImage", allData?.mainImage);
    appendIfValue("imageGallery", allData?.imageGallery);
    appendIfValue("layoutPlan", allData?.layoutPlan);

    if (isFormValid) {
      dispatch(postAddProperty(payload, navigate));
    } else {
      // setError(error);
    }
    // dispatch(loginSubmit(creds,navigate))
  };

  return {
    navigate,
    onTypeChange,
    clientData,
    handleSelectChange,
    propertyType,
    totalFlatCount,
    otherSelects,
    handleRadioChange,
    radioButtonData,
    isMobileScreen,
    twoHundredArray,
    oneToTen,
    housing,
    CommercialOfficeFeatures,
    LandFeatures,
    RegulerFeatures,
    IsIdealForBusiness,
    CommercialPlaces,
    allData,
    handleInputsChange,
    handleSubmit,
    Features,
    setFeatures,
    tags,
    setTags,
    inputValue,
    setInputValue,
    classes,
    handleDelete,
    handleKeyDown,
    setData,
  };
}
