import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postDealingItem, updateDealingItem } from "./action";

export default function AddDealingItemHooks() {
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state;
  const [data, setData] = useState({
    title: editData?.title ?? "",
    short_description: editData?.shortDescription ?? "",
    editor_desc: editData?.description ?? "",
    icon: editData?.icon ?? "",
    meta_title: editData?.metaTitle ?? "",
    meta_keywords: editData?.metaKeywords ?? "",
    meta_description: editData?.metaDescription ?? "",
    image: editData?.media?.[0]?.image?.[0]?.path,
    banner: editData?.media?.[0]?.banner?.[0]?.path,
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
    const isUpload = key === "image" || key === "banner";
    value = isUpload && event ? event.target.files[0] : value;
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  const handleSubmit = () => {
    const requiredFields = [
      "title",
      "short_description",
      "icon",
      "editor_desc",

      "meta_title",
      "meta_keywords",
      "meta_description",

      "banner",
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
      payload.append("title", data?.title);
      payload.append("description", data?.editor_desc);
      payload.append("shortDescription", data?.short_description);
      payload.append("icon", data?.icon);

      payload.append("metaTitle", data?.meta_title);
      payload.append("metaKeywords", data?.meta_keywords);
      payload.append("metaDescription", data?.meta_description);

      payload.append("banner", data?.banner);
      payload.append("image", data?.image);
      if (isEdit) {
        payload.append("_id", isEdit);
        dispatch(updateDealingItem(payload, navigate));
      } else {
        dispatch(postDealingItem(payload, navigate));
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
