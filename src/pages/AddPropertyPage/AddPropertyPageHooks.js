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

  const handleSubmit = async() => {
    console.log("handleSubmit", allData, tags);
    let isFormValid = true;
    const payload = new FormData();
    payload.append("iAm", allData?.["iAm"]);
    payload.append("for", allData?.["for"]);
    payload.append("pType", allData?.["pType"]);
    payload.append("postingAs", allData?.["iAm"]);

    payload.append("name", allData?.Name);
    payload.append("mobile", allData?.["Mobile"]);
    payload.append("email", allData?.["Email"]);

    payload.append("pCity", allData?.City);
    payload.append("locality", allData?.Locality);
    payload.append("nameOfProject", allData?.propertyTitle);

    await tags?.map((item, index) => {
      payload.append(`propertyTag[${index}]`, item);
    });
    payload.append("propertySubTitle", allData?.propertySubTitle);
    payload.append("description", allData?.editor_property_desc);
    payload.append("isNegotiate", allData?.is_price_negotiable);
    payload.append("isPostPropertyAgree", allData?.post_confirmation);
    payload.append("isTermsAndConditionAgree", allData?.privacy_and_condition);

    payload.append("bookingPrice", allData?.token_amt);
    payload.append("expectedPrice", allData?.expected_price);

    payload.append("totalFlats", allData?.totalFlatCount);
    payload.append("balconies", allData?.Balconies);
    payload.append("bedrooms", allData?.Bedrooms);
    payload.append("floorNo", allData?.floor_no);

    payload.append("totalFloors", allData?.total_floors);
    payload.append("furnishedStatus", allData?.furnished_status);
    payload.append("bathrooms", allData?.Bathrooms);
    payload.append(
      "FloorsAllowedForConstruction",
      allData?.allowed_floor_contruction
    );
    payload.append("WidthOfRoadInM", allData?.width_of_road_facing_plot);
    payload.append("WidthOfRoad", allData?.width_of_open_side);
    payload.append("NoOfOpenSides", allData?.no_of_open_sides);
    payload.append("isBoundaryWall", allData?.boundary_walls);

    payload.append("plotArea", allData?.plot_area);
    payload.append("plotLength", allData?.plot_length);
    payload.append("isCornerPlot", allData?.is_corner_plot);
    payload.append("plotBreadth", allData?.plot_breadth);
    payload.append("superArea", allData?.super_area);
    payload.append("carpetArea", allData?.carpet_area);

    payload.append("possessionStatus", allData?.possession_status);
    payload.append("availableFromMonth", allData?.Month);
    payload.append("availableFromYear", allData?.Year);

    await Features?.map((item, index) => {
      payload.append(
        `amenities[${index}]`,
        allData[`Property_Feature${index}`]
      );
    });

    payload.append("address[city]", allData?.City);
    payload.append("address[zip]", allData?.Zipcode);
    payload.append("address[state]", allData?.state);
    payload.append("address[street]", allData?.street);
    payload.append("mainImage", allData?.mainImage);
    payload.append("imageGallery", allData?.imageGallery);
    payload.append("layoutPlan", allData?.layoutPlan);
    console.log("admin@gmail.com",payload)

    // if (isFormValid) {
      dispatch(postAddProperty(payload, navigate));
    // } else {
      // setError(error);
    // }
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
