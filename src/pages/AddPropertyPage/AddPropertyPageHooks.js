import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddProperty, postEditProperty } from "./action";
import axios from "axios";
import { toast } from "react-toastify";

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
  const [errors, setErrors] = useState();
  const [latLng, setLatLng] = useState({ lat: "", lng: "" });
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
    is_price_negotiable: location?.state?.isNegotiate === "true",
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
    boundary_walls: location?.state?.features?.isBoundaryWall,
    plot_area: location?.state?.features?.plotArea,
    plot_length: location?.state?.features?.plotLength,
    is_corner_plot: location?.state?.features?.isCornerPlot === "true",
    plot_breadth: location?.state?.features?.plotBreadth,
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
      setTags(location?.state?.propertyTag);
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
    const isEvent = isEventBased(idOrEvent);
    const event = isEvent ? idOrEvent : null;
    let key = isEvent ? event.target.id : idOrEvent;
    const name = isEvent ? event.target.name : null;

    const specialKeys = [
      "for",
      "boundary_walls",
      "personal_washroom",
      "pantry_cafeteria",
    ];

    key = specialKeys.includes(name) ? name : key || name; // Handle radio buttons by name

    let value = isEvent ? event.target.value : val;

    if (["mainImage", "imageGallery", "layoutPlan"].includes(key) && event) {
      value = event.target.files;
    } else if (
      key === "is_corner_plot" ||
      key === "is_price_negotiable" ||
      key === "privacy_and_condition" ||
      key === "post_confirmation"
    ) {
      value = isEvent ? event.target.checked : val;
    }

    const numericKeys = [
      "width_of_road_facing_plot",
      "plot_area",
      "plot_length",
      "plot_breadth",
      "token_amt",
      "expected_price",
      "super_area",
      "carpet_area",
    ];

    if (numericKeys.includes(key)) {
      value = value.replace(/\D/g, "");
    } else if (key === "Mobile") {
      value = value.replace(/\D/g, "").slice(0, 10);
    } else if (key === "Zipcode") {
      value = value.replace(/\D/g, "").slice(0, 5);
    } else if (key === "mapLink") {
      extractCoordinates(value);
    }

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

  const validateFormData = (allData) => {
    let isFormValid = true;
    let errorMessages = {}; // Error messages as an object

    // Example validators
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidMobile = (mobile) => /^[0-9]{10}$/.test(mobile); // Example for 10-digit numbers

    // Validate fields
    const validateField = (key, value, errorMsg, validator) => {
      if (!value || (validator && !validator(value))) {
        isFormValid = false;
        errorMessages[key] = errorMsg; // Store error message with field key
      }
    };

    validateField("Name", allData?.Name, "Name is required.");
    validateField(
      "Mobile",
      allData?.Mobile,
      "Invalid mobile number.",
      isValidMobile
    );
    validateField(
      "Email",
      allData?.Email,
      "Invalid email address.",
      isValidEmail
    );
    validateField("pType", allData?.pType, "Property type is required.");
    validateField(
      "post_confirmation",
      allData?.post_confirmation,
      "Post confirmation is required."
    );
    validateField(
      "privacy_and_condition",
      allData?.privacy_and_condition,
      "You must agree to the privacy and conditions."
    );

    // Add more validations as needed for other fields

    return { isFormValid, errorMessages };
  };

  const handleSubmit = async () => {
    extractCoordinates();
    setLoader(true);

    // Perform validation
    const { isFormValid, errorMessages } = validateFormData(allData);

    if (!isFormValid) {
      setErrors(errorMessages);
      setLoader(false);
      return; // Stop submission if the form is invalid
    }
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
    appendIfValue("isNegotiate", `${allData?.is_price_negotiable}`);
    appendIfValue("isPostPropertyAgree", allData?.post_confirmation);
    appendIfValue("isTermsAndConditionAgree", allData?.privacy_and_condition);
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
    appendIfValue("isCornerPlot", allData?.is_corner_plot);
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
    appendIfValue("address[mapLink]", `${latLng?.lat}/${latLng?.lng}`);

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

  const extractCoordinates = (locationLink) => {
    try {
      const urlPattern = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
      const match = locationLink.match(urlPattern);

      if (match) {
        const lat = match[1];
        const lng = match[2];
        setLatLng({ lat, lng });
        toast.success("Successfully find coordinates in the URL.");
        return { lat, lng };
      } else {
        toast.error("Could not find coordinates in the URL.");
      }
    } catch (error) {
      toast.error("Error extracting coordinates from URL:", error);
    }
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
    errors,
  };
}
