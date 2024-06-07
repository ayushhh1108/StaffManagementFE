import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddUser, updateUser } from "./action";

export default function AddUsersPageHooks() {
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state;
  const [data, setData] = useState({
    first_name: editData?.title ?? "",
    last_name: editData?.metaTitle ?? "",
    email: editData?.metaKeywords ?? "",
    mobile: editData?.metaDescription ?? "",
    role: editData?.description ?? "",
    image: editData?.image?.[0]?.path ?? "",
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
    const isUpload = key === "image";
    value = isUpload && event ? event.target.files[0] : value;
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  const handleSubmit = () => {
    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "mobile",
      "role",
      "image",
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
      payload.append("first_name", data?.first_name);
      payload.append("last_name", data?.last_name);
      payload.append("email", data?.email);
      payload.append("mobile", data?.mobile);
      payload.append("role", data?.role);
      payload.append("image", data?.image);
      if (isEdit) {
        payload.append("_id", isEdit);
        dispatch(updateUser(payload, navigate));
      } else {
        console.log("handleSubmit", data);
        dispatch(postAddUser(payload, navigate));
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
