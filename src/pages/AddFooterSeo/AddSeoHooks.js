import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddCMS, postAddSEO, postUpdateCMS, postUpdateSEO } from "./action";

export default function AddSeoHooks() {
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state;
  const [isEdit, setIsEdit] = useState(editData?._id);
  const [data, setData] = useState({
    ...editData,
  });
  const [error, setError] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (id, val) => {
    const event = isEventBased(id) ? id : null;
    const key = event ? event.target.id : id;
    let value = event ? event.target.value : val;
    const isUpload = key === "image";
    value = isUpload && event ? event.target.files[0] : value;
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  const handleSubmit = () => {
    const requiredFields = ["description", "url", "title"];
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
        dispatch(postUpdateSEO({ ...data, other: "" }, navigate, isEdit));
      } else {
        dispatch(postAddSEO({ ...data, other: "" }, navigate));
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
    isEdit
  };
}
