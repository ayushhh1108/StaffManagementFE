import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CMSListHook() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubCMS = (props) => {
    navigate("/sub-cms", { state: { ...props } });
  };

  return {
    navigate,
    handleSubCMS,
  };
}
