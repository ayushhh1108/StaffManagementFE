import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMenuPageHook() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (event) => {
    const { id, value, checked } = event?.target;
    const newValue = id === "status" ? checked : value;
    setData({ ...data, [id]: newValue });
  };

  const handleSubmit = () => {
    console.log("handleSubmit", data);
    // dispatch(loginSubmit(creds,navigate))
  };
  return {
    navigate,
    handleSubmit,
    handleInputChange,
    data,
  };
}
