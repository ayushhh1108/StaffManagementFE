import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddSlider, postUpdateSlider } from "./action";

export default function AddSliderPageHook() {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state;
  const [data, setData] = useState({
    name: editData?.name ?? "",
    desc: editData?.description ?? "",
    meta_title: editData?.metaTitle ?? "",
    meta_key: editData?.metaKeywords ?? "",
    meta_desc: editData?.metaDescription ?? "",
    upload_image: editData?.image?.[0]?.path,
    descriptionPosition: editData?.descriptionPosition,
  });
  const [isEdit, setIsEdit] = useState(location?.state?._id);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("handleSubmit", editData);

  const handleInputChange = (event) => {
    const { id, value, checked, files } = event?.target;
    const isUpload = id === "upload_image";
    const newValue = id === "status" ? checked : isUpload ? files[0] : value;
    const updatedError = { ...error };
    delete updatedError[id];
    setError(updatedError);
    setData({ ...data, [id]: newValue });
  };
  const handleSubmit = () => {
    const requiredFields = [
      "name",
      "desc",
      "meta_key",
      "meta_title",
      "meta_desc",
      "upload_image",
      "descriptionPosition",
    ];
    let error = {};
    let isFormValid = true;

    requiredFields.forEach((field) => {
      if (!data?.[field]) {
        error[field] = true;
        isFormValid = false;
      }
    });
    console.log(
      "banner_imagebanner_imagebanner_image",
      data,
      error,
      isFormValid
    );
    if (isFormValid) {
      const payload = new FormData();
      payload.append("name", data?.name);
      payload.append("description", data?.desc);
      payload.append("metaTitle", data?.meta_title);
      payload.append("metaKeywords", data?.meta_key);
      payload.append("metaDescription", data?.meta_desc);
      payload.append("descriptionPosition", data?.descriptionPosition);
      payload.append("image", data?.upload_image);
      if (isEdit) {
        payload.append("_id", isEdit);
        dispatch(postUpdateSlider(payload, navigate));
      } else {
        dispatch(postAddSlider(payload, navigate));
      }
    } else {
      setError(error);
      console.log(error, "error", isFormValid);
    }
    // dispatch(loginSubmit(creds,navigate))
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
