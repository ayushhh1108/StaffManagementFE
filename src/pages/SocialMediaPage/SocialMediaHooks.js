import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSocialLinks, updateSocialLinks } from "./action";

export default function SocialMediaHooks() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const storeData = useSelector((store) => store?.socialReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSocialLinks());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log("storeData", storeData?.socialMediaData);
    setData(storeData?.socialMediaData);
  }, [storeData]);

  const handleInputChange = (id, val) => {
    const event = isEventBased(id) ? id : null;
    const key = event ? event.target.id : id;
    let value = event ? event.target.value : val;
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  const handleSubmit = () => {
    const requiredFields = [
      "facebook",
      "youtube",
      "linkedin",
      "instagram",
      "twitter",
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
      const { facebook, youtube, linkedin, instagram, twitter, _id } = data;
      dispatch(
        updateSocialLinks(
          { facebook, youtube, linkedin, instagram, twitter, _id },
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
