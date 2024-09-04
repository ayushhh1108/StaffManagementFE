import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postFinance, postUpdateFinance } from "./action";
import { getFinanceData } from "../FinancePage/action";

export default function AddFinanceHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeData = useSelector((state) => state?.financeReducer?.financeData);
  const [data, setData] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getFinanceData());
  }, []);

  useEffect(() => {
    setData({
      ...storeData?.[0],
      bannerImage: storeData?.[0]?.bannerImage?.[0],
      bankImage: storeData?.[0]?.bankImage,
    });
  }, [storeData]);

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
    "title1",
    "description1",
    "title2",
    "description2",
    "title3",
    "description3",
    "metaTitle",
    "metaKeywords",
    "metaDescription",
    "tagLine",
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
      payload.delete("bankImage");
      payload.append("_id", storeData?.[0]?._id);
      data?.bankImage?.map((item) => {
        payload.append("bankImage", item);
      });
      dispatch(postUpdateFinance(payload, navigate));
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
