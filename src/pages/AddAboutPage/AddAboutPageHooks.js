import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddAboutPage } from "./action";

export default function AddAboutPageHooks() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [data, setData] = useState();
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
    console.log("handleSubmit", data);
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
        // dispatch(postUpdateBlog(payload, navigate));
      } else {
        dispatch(postAddAboutPage(payload, navigate));
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
