import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddAboutPage, postUpdateAboutPage } from "./action";
import { isEvent } from "../../utils/helper";

export default function AddAboutPageHooks() {
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state;
  const [data, setData] = useState({
    title: editData?.title ?? "",
    meta_title: editData?.metaTitle ?? "",
    meta_keywords: editData?.metaKeywords ?? "",
    meta_description: editData?.metaDescription ?? "",
    editor_desc: editData?.description ?? "",
    position: editData?.imagePosition ?? "",
    image: editData?.image[0],
  });
  const [error, setError] = useState();
  const [isEdit, setIsEdit] = useState(location?.state?._id);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (id, val) => {
    const event = isEvent(id);
    const key = event ? event.target.id : id;
    let value = event ? event.target.value : val;
    const isUpload = key === "image";
    value = isUpload && event ? event.target.files[0] : value;
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const handleSubmit = () => {
    const requiredFields = [
      "title",
      "image",
      "position",
      "editor_desc",
      "meta_title",
      "meta_keywords",
      "meta_description",
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
      payload.append("title", data?.title);
      payload.append("image", data?.image);
      payload.append("description", data?.editor_desc);
      payload.append("metaTitle", data?.meta_title);
      payload.append("metaKeywords", data?.meta_keywords);
      payload.append("metaDescription", data?.meta_description);
      payload.append("imagePosition", data?.position);
      if (isEdit) {
        payload.append("_id", isEdit);
        dispatch(postUpdateAboutPage(payload, navigate));
      } else {
        dispatch(postAddAboutPage(payload, navigate));
      }
    } else {
      setError(error);
    }
    // dispatch(loginSubmit(creds,navigate))
  };

  return {
    handleSubmit,
    handleInputChange,
    data,
    error,
    isEdit,
  };
}
