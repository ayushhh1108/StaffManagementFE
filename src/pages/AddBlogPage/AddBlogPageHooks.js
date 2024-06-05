import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddBlog, postUpdateBlog } from "./action";

export default function AddMenuPageHook() {
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state;
  const [data, setData] = useState({
    title: editData?.title ?? "",
    short_desc: editData?.sortDescription ?? "",
    meta_title: editData?.metaTitle ?? "",
    meta_key: editData?.metaKeywords ?? "",
    meta_desc: editData?.metaDescription ?? "",
    editor_desc: editData?.description ?? "",
    banner_image: editData?.blogImage?.[0]?.bannerImage?.[0]?.path,
    image: editData?.blogImage?.[0]?.blogImage?.[0]?.path,
  });
  const [error, setError] = useState();
  const [isEdit, setIsEdit] = useState(location?.state?._id);
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
      if (isEdit) {
        payload.append("_id", isEdit);
        dispatch(postUpdateBlog(payload, navigate));
      } else {
        dispatch(postAddBlog(payload, navigate));
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
    isEdit,
  };
}
