import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddFeedbackPageHook() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (idOrEvent, val) => {
    const event = isEventBased(idOrEvent) ? idOrEvent : null;
    const key =
      event?.target?.name === "rating"
        ? "rating"
        : event?.target?.id || idOrEvent;
    let value = event ? event.target.value : val;
    const isUpload = key === "icon_image" || key === "property_image";
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
