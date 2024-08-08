import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddSupplier } from "./action";
import { updateSupplier } from "../SupplierPage/action";

export default function AddSupplierHooks() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const editData = location?.state;
  const [isEdit, setIsEdit] = useState(location?.state?._id);
  const [data, setData] = useState({
    ...editData,
    file: editData?.file[0]?.location,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (id, val) => {
    const event = isEventBased(id) ? id : null;
    const key = event ? event.target.id : id;
    let value = event ? event.target.value : val;
    const isUpload = key === "file";
    value = isUpload && event ? event.target.files[0] : value;
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  const requiredFields = [
    "firstName",
    "lastName",
    "companyName",
    "file",
    "mobile",
    "role",
    "email",
    "message",
    "supplierOf",
    "city",
    "location",
  ];

  const handleSubmit = () => {
    let error = {};
    let isFormValid = true;
    const payload = new FormData();

    requiredFields.forEach((field) => {
      if (!data?.[field]) {
        error[field] = true;
        isFormValid = false;
      }
      payload.append(field, data?.[field]);
    });

    if (isFormValid) {
      if (isEdit) {
        payload.append("_id", isEdit);
        dispatch(updateSupplier(payload, navigate));
      } else {
        dispatch(postAddSupplier(payload, navigate));
      }
    } else {
      setError(error);
    }
    // dispatch(loginSubmit(creds,navigate))
  };
  console.log("handleSubmit", location?.state?.file[0]?.location);

  return {
    navigate,
    handleSubmit,
    handleInputChange,
    data,
    error,
  };
}
