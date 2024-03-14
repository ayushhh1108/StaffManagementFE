import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPropertyPageHooks() {
  const navigate = useNavigate();
  const [clientData, setClientData] = useState({ clientType: "Owner" });
  const [propertyType, setPropertyType] = useState([]);
  const [totalFlatCount, setTotalFlatCount] = useState([]);
  const [otherSelects, setOtherSelects] = useState({});
  const isMobileScreen = useMediaQuery("(max-width:1000px)");
  const [radioButtonData, setRadioButtonData] = useState({
    possession_status: "under_construction",
  });
  const onTypeChange = (props) => {
    setClientData({ ...clientData, clientType: props.target.id });
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
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setRadioButtonData({ ...radioButtonData, [name]: value });
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
    isMobileScreen
  };
}
