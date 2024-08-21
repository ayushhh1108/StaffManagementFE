import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddCareer, postUpdateCareer } from "./action";

export default function AddCareerPageHooks() {
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state;
  const [isEdit, setIsEdit] = useState(editData?._id);
  const [data, setData] = useState({
    designation: editData?.designation,
    department: editData?.department,
    experience: editData?.experience,
    vacancy: editData?.vacancy,
    description: editData?.description,
    location: location?.state?.location,
  });
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
      if (isEdit) {
        dispatch(postUpdateCareer({ ...data, _id: isEdit }, navigate));
      } else {
        dispatch(postAddCareer(data, navigate));
      }
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
