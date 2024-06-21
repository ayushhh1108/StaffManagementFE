import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSiteAddress, updateSiteAddress } from "./action";

export default function SiteAddressHooks() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const storeData = useSelector((store) => store?.siteAddressReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSiteAddress());
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (id, val) => {
    const event = isEventBased(id) ? id : null;
    const key = event ? event.target.id : id;
    let value = event ? event.target.value : val;
    const isUpload = key === "upload_image";
    value = isUpload && event ? event.target.files[0] : value;
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  useEffect(() => {
    setData(storeData?.addressData);
  }, [storeData]);

  const handleSubmit = () => {
    const requiredFields = [
      "address",
      "city",
      "state",
      "pinCode",
      "mobile",
      "email",
      "timing",
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
      const { address, city, state, pinCode, mobile, email, timing, _id } =
        data;
      dispatch(
        updateSiteAddress(
          { address, city, state, pinCode, mobile, email, timing, _id },
          navigate
        )
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
  };
}
