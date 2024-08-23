import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SubCMSHook() {
  const navigate = useNavigate();
  const location = useLocation();
  const CMSID = location?.state?._id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!CMSID) {
      navigate("/cms-list");
    }
  }, [location]);

  console.log("location", location?.state);

  const handleSubCMS = (props) => {
    navigate("/sub-cms", { state: { props } });
  };

  return {
    navigate,
    handleSubCMS,
    location,
  };
}
