import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMenuPageHook() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (event) => {
    const { id, value, checked, files } = event?.target;
    const isUpload = id === "image" || id === "banner_image";
    const newValue = id === "status" ? checked : isUpload ? files[0] : value;
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
