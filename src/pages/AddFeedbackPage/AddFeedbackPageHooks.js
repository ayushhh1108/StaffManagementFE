import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddFeedback, updateFeedback } from "./action";

export default function AddFeedbackPageHook() {
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state;
  const [data, setData] = useState({
    name: editData?.name ?? "",
    city: editData?.city ?? "",
    message: editData?.message ?? "",
    rating: editData?.rating ?? "",
    icon_image: editData?.image?.[0]?.iconImage?.[0]?.path,
    property_image: editData?.image?.[0]?.image?.[0]?.path
  });
  const [error, setError] = useState();
  const [isEdit, setIsEdit] = useState(location?.state?._id);
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
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  console.log("handleSubmit", editData);
  const handleSubmit = () => {
    const requiredFields = [
      "name",
      "city",
      "message",
      "rating",
      "icon_image",
      "property_image",
    ];
    let error = {};
    let isFormValid = true;

    requiredFields.forEach((field) => {
      if (!data?.[field]) {
        error[field] = true;
        isFormValid = false;
      }
    });

    if (isFormValid) {
      const payload = new FormData();
      payload.append("name", data?.name);
      payload.append("city", data?.city);
      payload.append("message", data?.message);
      payload.append("rating", data?.rating);
      payload.append("image", data?.property_image);
      payload.append("iconImage", data?.icon_image);
      if (isEdit) {
        payload.append("_id", isEdit);
        console.log("isEdit", data);
        dispatch(updateFeedback(payload, navigate));
      } else {
        console.log("successfull", data);
        dispatch(postAddFeedback(payload, navigate));
      }
    } else {
      setError(error);
    }
    // dispatch(loginSubmit(creds,navigate))
  };

  return {
    navigate,
    handleSubmit,
    handleInputChange,
    data,
    error,
  };
}
