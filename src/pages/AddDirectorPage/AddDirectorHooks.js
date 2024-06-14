import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddDirector, updateDirector } from "./action";

export default function AddDirectorHooks() {
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state;
  const [data, setData] = useState({
    ...editData,
    image: editData?.image?.[0]?.image?.[0]?.path,
  });
  console.log("editData", editData);
  const [error, setError] = useState();
  const [isEdit, setIsEdit] = useState(location?.state?._id);
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

  const requiredFields = [
    "name",
    "image",
    "shortDescription",
    "description",
    "designation",
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
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
      if (isEdit) {
        payload.append("_id", isEdit);
        dispatch(updateDirector(payload, navigate));
      } else {
        console.log("handleSubmit", data);
        dispatch(postAddDirector(payload, navigate));
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
