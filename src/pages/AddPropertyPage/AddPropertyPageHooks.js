import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPropertyPageHooks() {
  const navigate = useNavigate();
  const [clientData, setClientData] = useState({ clientType: "Owner" });
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
  const [inputValue, setInputValue] = useState('');
  const [Features, setFeatures] = useState([{ key: 1, value: "" }, { key: 2 }, { key: 3 }]);

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
    setClientData({ ...clientData, clientType: props.target.id });
    setData("clientType", props?.target?.id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelectChange = (event) => {
    const { value, name } = event.target;
    if (name === "property_type") {
      setPropertyType([value]);
    } else if (name === "total_flats") {
      setTotalFlatCount([value]);
    } else {
      setOtherSelects({ ...otherSelects, [name]: [value] });
    }
    setAllData(name, value);
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
    const isUpload = key === "image";
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
    if (e.key === 'Enter' && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
      e.preventDefault();
    }
  };


  const handleSubmit = () => { };

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
    Features, setFeatures,
    tags, setTags,
    inputValue, setInputValue,
    classes,
    handleDelete,
    handleKeyDown,
  };
}
