import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postFinance } from "./action";

export default function AddFinanceHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location?.state;
  const [data, setData] = useState({
    ...editData,
    image: editData?.image?.[0]?.path,
  });
  const [error, setError] = useState();
  const [isEdit, setIsEdit] = useState(location?.state?._id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (id, val) => {
    const event = isEventBased(id) ? id : null;
    const key = event ? event.target.id : id;
    let value = event ? event.target.value : val;
    const isUpload = key === "bannerImage";
    value = isUpload && event ? event.target.files[0] : value;
    value = key === "bankImage" && event ? [...event.target.files] : value;
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;
  const requiredFields = [
    "bankImage",
    "bannerImage",
    "title",
    "editor_desc",
    "metaTitle",
    "metaKeywords",
    "metaDescription",
  ];

  const handleSubmit = () => {
    const payload = new FormData();
    let error = {};
    let isFormValid = true;

    requiredFields.forEach((field) => {
      if (!data?.[field]) {
        error[field] = true;
        isFormValid = false;
      }
      payload.append(field, data?.[field]);
    });

    if (isFormValid) {
      payload.delete("editor_desc");
      payload.delete("bankImage");
      payload.append("description", data?.editor_desc);
      data?.bankImage?.map((item) => {
        payload.append("bankImage", item);
      });
      if (isEdit) {
        payload.append("_id", isEdit);
        // dispatch(postUpdateAboutPage(payload, navigate));
      } else {
        console.log("handleSubmit", data);
        dispatch(postFinance(payload, navigate));
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
