import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postAddCareer } from "./action";

export default function AddCareerPageHooks() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [error, setError] = useState();
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
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  const handleSubmit = () => {
    const requiredFields = [
      "designation",
      "department",
      "experience",
      "location",
      "vacancy",
      "description",
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
      dispatch(postAddCareer(data, navigate));
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
