import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddSubCMS, postUpdateSubCMS } from "./action";

export default function AddSubCMSHooks() {
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state?.editData;
  const CMSData = location?.state?.CMSData;
  const [isEdit, setIsEdit] = useState(editData?._id);
  const [data, setData] = useState({
    ...editData,
    isActive: editData?.isActive ? "active" : "inactive",
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
  console.log("CMSData", CMSData);
  const isEventBased = (input) => !!input?.target?.id;

  const handleSubmit = () => {
    const urlRequiredFields = [
      "type",
      "isActive",
      "title",
      "slug",
      "orderNo",
      "url",
    ];

    const pageRequiredFields = [
      "type",
      "isActive",
      "title",
      "slug",
      "orderNo",
      "description",
      "metaTitle",
      "metaKey",
      "metaDescription",
      "bannerType",
      "bannerMedia",
    ];

    const requiredFields =
      data?.type === "url" ? urlRequiredFields : pageRequiredFields;
    let error = {};
    let isFormValid = true;
    const payload = new FormData();
    console.log("requiredFields", requiredFields);
    requiredFields.forEach((field) => {
      if (!data?.[field]) {
        error[field] = true;
        isFormValid = false;
      }
      payload.append(
        field,
        field === "isActive" ? data?.[field] === "active" : data?.[field]
      );
    });

    if (isFormValid) {
      if (isEdit) {
        dispatch(postUpdateSubCMS(payload, navigate, isEdit));
      } else {
        payload.append("categoryId", CMSData?._id);
        dispatch(postAddSubCMS(payload, navigate));
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
