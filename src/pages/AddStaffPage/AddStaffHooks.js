import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAddStaff, updateStaff } from "./action";

export default function AddStaffHooks() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editData = location?.state;
  const [isEdit, setIsEdit] = useState(location?.state?._id);
  const [data, setData] = useState({
    ...editData,
  });
  const [error, setError] = useState({});

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
    "jobTitle",
    "firstName",
    "lastName",
    "userName",
    "password",
    "email",
    "phoneNumber",
    "companyEmail",
    "gender",
  ];

  const handleSubmit = () => {
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
        dispatch(updateStaff(data, navigate, isEdit));
      } else {
        dispatch(postAddStaff(data, navigate));
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
