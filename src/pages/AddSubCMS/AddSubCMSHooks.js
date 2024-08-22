import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddSubCMSHooks() {
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state;
  const [isEdit, setIsEdit] = useState(editData?._id);
  const [data, setData] = useState({
    name: editData?.name,
    status: editData?.status,
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
    const isUpload = key === "bannerMedia";
    value = isUpload && event ? event.target.files[0] : value;
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  const handleSubmit = () => {
    const urlRequiredFields = [
      "type",
      "active",
      "title",
      "slug",
      "orderNumber",
      "url",
    ];
    const pageRequiredFields = [
      "type",
      "active",
      "title",
      "slug",
      "orderNumber",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
      "bannerType",
      "bannerMedia",
    ];

    const requiredFields =
      data?.type === "url" ? urlRequiredFields : pageRequiredFields;
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
        // dispatch(postUpdateCMS({ ...data, _id: isEdit }, navigate));
      } else {
        // dispatch(postAddCMS(data, navigate));
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
