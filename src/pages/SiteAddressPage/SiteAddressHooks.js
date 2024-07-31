import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SiteAddressHooks() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (id, val) => {
    const event = isEventBased(id) ? id : null;
    const key = event ? event.target.id : id;
    let value = event ? event.target.value : val;
    const isUpload = key === "upload_image";
    value = isUpload && event ? event.target.files[0] : value;
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

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
