import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLegacyData, updateLegacyData, updateSiteAddress } from "./action";

export default function LegacyPageHooks() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const storeData = useSelector((store) => store?.legacyDataReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getLegacyData());
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (id, val) => {
    const event = isEventBased(id) ? id : null;
    const key = event ? event.target.id : id;
    let value = event ? event.target.value : val;
    const isUpload = key === "landscapeImage" || key === "portraitImage";
    value = isUpload && event ? event.target.files[0] : value;
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  useEffect(() => {
    console.log("storeData?.legacyData", storeData?.legacyData);
    setData(
      storeData?.legacyData?.length && {
        ...storeData?.legacyData[0],
        portraitImage: storeData?.legacyData[0]?.portraitImage[0],
        landscapeImage: storeData?.legacyData[0]?.landscapeImage[0],
      }
    );
  }, [storeData]);

  const requiredFields = [
    "clients",
    "clientDescription",
    "years",
    "yearDescription",
    "projects",
    "projectDescription",
    "shortDescription",
    "description",
    "portraitImage",
    "landscapeImage",
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
      payload.append("_id", data?._id);
      dispatch(updateLegacyData(payload, navigate));
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
