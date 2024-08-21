import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAddService } from "./action";

export default function AddServiceHooks() {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (id, val) => {
    const event = isEventBased(id) ? id : null;
    const key = event ? event.target.id : id;
    let value = event ? event.target.value : val;
    const isUpload = key === "bannerImage";
    const images = key === "imageGallery";
    value =
      isUpload && event
        ? event.target.files[0]
        : images
        ? [...event.target.files]
        : value;

    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);

    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  const requiredFields = [
    "title",
    "subtitle",
    "subDescription",
    "description",
    "imageGallery",
    "bannerImage",
  ];

  const handleSubmit = () => {
    let error = {};
    let isFormValid = true;
    const payload = new FormData();

    requiredFields.forEach((field) => {
      if (!data?.[field]) {
        error[field] = true;
        isFormValid = false;
      }
      payload.append(field, data?.[field]);
    });

    if (isFormValid) {
      payload.delete("imageGallery");
      data?.imageGallery?.map((item) => {
        payload.append("imageGallery", item);
      });
      dispatch(postAddService(payload, navigate));
    } else {
      setError(error);
    }
  };

  return {
    navigate,
    handleSubmit,
    handleInputChange,
    data,
    error,
  };
}
