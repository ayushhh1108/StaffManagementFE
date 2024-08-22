import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SubCMSHook() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("location", location);
  
  const handleSubCMS = (props) => {
    navigate("/sub-cms", { state: { props } });
  };

  return {
    navigate,
    handleSubCMS,
  };
}
