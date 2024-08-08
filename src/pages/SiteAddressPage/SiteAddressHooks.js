import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSiteAddressLinks, updateSiteAddress } from "./action";

export default function SiteAddressHooks() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store?.siteAddressReducer);
  const [error, setError] = useState();

  useEffect(() => {
    dispatch(getSiteAddressLinks());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    console.log("storeData", storeData?.siteAddressData);
    setData(storeData?.siteAddressData);
  }, [storeData]);

  const handleInputChange = (id, val) => {
    const event = isEventBased(id) ? id : null;
    const key = event ? event.target.id : id;
    let value = event ? event.target.value : val;
    const isUpload = key === "upload_image";
    value = isUpload && event ? event.target.files[0] : value;
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

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
    error,
  };
}
