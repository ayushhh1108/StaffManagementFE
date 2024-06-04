import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postAddBlog } from "./action";

export default function AddMenuPageHook() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (event) => {
    const { id, value, checked, files } = event?.target;
    const isUpload = id === "image" || id === "banner_image";
    const newValue = id === "status" ? checked : isUpload ? files[0] : value;
    const updatedError = { ...error };
    delete updatedError[id];
    setError(updatedError);
    setData({ ...data, [id]: newValue });
  };

  const handleSubmit = () => {
    const requiredFields = [
      "title",
      "banner_image",
      "image",
      "short_desc",
      "editor_desc",
      "meta_title",
      "meta_key",
      "meta_desc",
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
      payload.append("bannerImage", data?.banner_image);
      payload.append("blogImage", data?.image);
      payload.append("title", data?.title);
      payload.append("sortDescription", data?.short_desc);
      payload.append("description", data?.editor_desc);
      payload.append("metaTitle", data?.meta_title);
      payload.append("metaKeywords", data?.meta_key);
      payload.append("metaDescription", data?.meta_desc);
      dispatch(postAddBlog(payload, navigate));
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
