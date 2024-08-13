import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddDealIn, updateDealIn } from "./action";

export default function AddDealingHooks() {
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state;
  const [data, setData] = useState({
    ...editData,
    iconImage: editData?.iconImage?.[0],
  });
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
    const isUpload = key === "iconImage";
    value = isUpload && event ? event.target.files[0] : value;
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  const requiredFields = [
    "iconImage",
    "title",
    "description",
    "metaTitle",
    "metaKeywords",
    "metaDescription",
  ];
  console.log("handleSubmit", editData);
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
        dispatch(updateDealIn(payload, navigate));
      } else {
        console.log("handleSubmit", data);
        dispatch(postAddDealIn(payload, navigate));
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
