import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddProperty, postEditProperty } from "./action";

export default function AddPropertyPageHooks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isEditt = location?.state?._id;
  const features = {};
  const [Features, setFeatures] = useState(
    isEditt
      ? location?.state?.features?.amenities?.map((i, x) => {
          features[`Property_Feature${x}`] = i;
          return {
            key: x + 1,
            value: i,
          };
        })
      : [{ key: 1, value: "" }, { key: 2 }, { key: 3 }]
  );
  const [clientData, setClientData] = useState({ iAm: "Owner" });
  const [allData, setAllData] = useState({
    for: "sale",
    ...location?.state,
    ...features,
    Name: location?.state?.name,
    Mobile: location?.state?.mobile,
    Email: location?.state?.email,
    tag: location?.state?.propertyTag,
    city: location?.state?.pCity,
    Locality: location?.state?.locality,
    propertyTitle: location?.state?.nameOfProject,
    propertySubTitle: location?.state?.propertySubTitle,
    editor_property_desc: location?.state?.description,
    is_price_negotiable: location?.state?.isNegotiate,
    post_confirmation: location?.state?.isPostPropertyAgree === "true",
    privacy_and_condition: location?.state?.isTermsAndConditionAgree === "true",
    token_amt: location?.state?.bookingPrice,
    expected_price: location?.state?.expectedPrice,
    totalFlatCount: location?.state?.totalFlats,
    Balconies: location?.state?.features?.balconies,
    Bedrooms: location?.state?.features?.bedrooms,
    floor_no: location?.state?.features?.floorNo,
    total_floors: location?.state?.features?.totalFloors,
    furnished_status: location?.state?.features?.furnishedStatus,
    Bathrooms: location?.state?.features?.bathrooms,
    allowed_floor_contruction:
      location?.state?.features?.FloorsAllowedForConstruction,
    width_of_road_facing_plot: location?.state?.features?.WidthOfRoadInM,
    width_of_open_side: location?.state?.features?.WidthOfRoad,
    no_of_open_sides: location?.state?.features?.NoOfOpenSides,
    boundary_walls: location?.state?.isBoundaryWall,
    plot_area: location?.state?.plotArea,
    plot_length: location?.state?.plotLength,
    is_corner_plot: location?.state?.isCornerPlot,
    plot_breadth: location?.state?.plotBreadth,
    super_area: location?.state?.features?.superArea,
    carpet_area: location?.state?.features?.carpetArea,
    possession_status: location?.state?.possessionStatus,
    Month: location?.state?.availableFromMonth,
    Year: location?.state?.availableFromYear,
    City: location?.state?.address?.city,
    Zipcode: location?.state?.address?.zip,
    state: location?.state?.address?.state,
    street: location?.state?.address?.street,
    transit: location?.state?.address?.transit,
    mallsCinemas: location?.state?.address?.mallsCinemas,
    schoolsColleges: location?.state?.address?.schoolsColleges,
    hospitals: location?.state?.address?.hospitals,
    mapLink: location?.state?.address?.mapLink,
    mainImage: location?.state?.images?.mainImage,
    imageGallery: location?.state?.images?.imageGallery,
    layoutPlan: location?.state?.images?.layoutPlan,
  });
  const [propertyType, setPropertyType] = useState([]);
  const [totalFlatCount, setTotalFlatCount] = useState([]);
  const [otherSelects, setOtherSelects] = useState({});
  const isMobileScreen = useMediaQuery("(max-width:1000px)");
  const [radioButtonData, setRadioButtonData] = useState({
    possession_status: "under_construction",
  });
  const classes = {};
  const [tags, setTags] = useState([]);
  const [loader, setLoader] = useState(false);
  const [inputValue, setInputValue] = useState("");

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

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isEditt) {
      setPropertyType([location?.state?.pType]);
      setOtherSelects({
        ...otherSelects,
        Bedrooms: location?.state?.features?.bedrooms,
        Balconies: location?.state?.features?.balconies,
        floor_no: location?.state?.features?.floorNo,
        total_floors: location?.state?.features?.totalFloors,
        furnished_status: location?.state?.features?.furnishedStatus,
        Bathrooms: location?.state?.features?.bathrooms,
        allowed_floor_contruction:
          location?.state?.features?.FloorsAllowedForConstruction,
        no_of_open_sides: location?.state?.features?.NoOfOpenSides,
        width_of_open_side: location?.state?.features?.WidthOfRoadInM,
        Month: location?.state?.features?.availableFromMonth,
        Year: location?.state?.features?.availableFromYear,
        age_construction: location?.state?.features?.bedrooms,
        land_zone: location?.state?.features?.bedrooms,
      });

    }
  }, [location]);

  const handleSelectChange = (event) => {
    const { value, name } = event.target;
    if (name === "pType") {
      setPropertyType([value]);
    } else if (name === "total_flats") {
      setTotalFlatCount([value]);
    } else {
      setOtherSelects({ ...otherSelects, [name]: [value] });
    }
    setData(name, value);
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setRadioButtonData({ [name]: value });
    setAllData({ ...allData, [name]: value });
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
        ? event.target.files
        : key === "is_corner_plot"
        ? idOrEvent?.target?.checked
        : value;
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

  const handleSubmit = async () => {
    let isFormValid = true;
    const payload = new FormData();
    setLoader(true);
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
    appendIfValue("address[transit]", allData?.transit);
    appendIfValue("address[mallsCinemas]", allData?.mallsCinemas);
    appendIfValue("address[schoolsColleges]", allData?.schoolsColleges);
    appendIfValue("address[hospitals]", allData?.hospitals);
    appendIfValue("address[mapLink]", allData?.mapLink);

    for (let index in allData?.mainImage || []) {
      if (allData?.mainImage.hasOwnProperty(index)) {
        const file = allData?.mainImage[index];
        appendIfValue(`mainImage`, file);
      }
    }

    for (let index in allData?.imageGallery || []) {
      if (allData?.imageGallery.hasOwnProperty(index)) {
        const file = allData?.imageGallery[index];
        appendIfValue(`imageGallery`, file);
      }
    }

    for (let index in allData?.layoutPlan || []) {
      if (allData?.layoutPlan.hasOwnProperty(index)) {
        const file = allData?.layoutPlan[index];
        appendIfValue(`layoutPlan`, file);
      }
    }

    // appendIfValue("mainImage", allData?.mainImage);
    // appendIfValue("imageGallery", allData?.imageGallery);
    // appendIfValue("layoutPlan", allData?.layoutPlan);

    // if (isFormValid) {
    if (isEditt) {
      appendIfValue(`propertyId`, isEditt);
      await dispatch(postEditProperty(payload, navigate));
    } else {
      await dispatch(postAddProperty(payload, navigate));
    }
    // } else {
    // setError(error);
    // }
    // dispatch(loginSubmit(creds,navigate))
    setLoader(false);
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
    loader,
  };
}
