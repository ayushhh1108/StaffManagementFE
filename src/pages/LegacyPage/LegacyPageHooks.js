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
    const isUpload = key === "backgroundImage";
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
        landscapeImage: storeData?.legacyData[0]?.portraitImage[0],
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

  const fileURL_to_blob = (file_url) => {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', file_url, true);
      request.responseType = 'blob';
      request.onload = function() {
          var reader = new FileReader();
          reader.readAsDataURL(request.response);
          reader.onload =  function(e){
              //console.log('DataURL:', e.target.result);
              resolve(e.target.result);
          };
      };
      request.onerror=function(e){
        reject(e);
      }
      request.send();
    });
  }
  

  const handleSubmit = () => {
    const payload = new FormData();
    let error = {};
    let isFormValid = true;
    if (typeof data?.portraitImage === "string") {
      // data.portraitImage = createFile(data?.portraitImage);
      console.log(
        "createFile(data?.portraitImage)",
        fileURL_to_blob(data?.portraitImage)
      );
    }
    if (typeof data?.landscapeImage === "string") {
      // data.landscapeImage = createFile(data?.landscapeImage);
    }

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
      console.log(
        "storeData",
        storeData?.legacyData?.length && storeData?.legacyData[0]
      );
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
