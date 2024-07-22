import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postAddUser, updateUser } from "./action";
import { getAllUserRole } from "../UserRolePage/action";

export default function AddUsersPageHooks() {
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location?.state;
  const [data, setData] = useState({
    firstName: editData?.firstName ?? "",
    lastName: editData?.lastName ?? "",
    email: editData?.email ?? "",
    mobile: editData?.mobile ?? "",
    password: editData?.password ?? "",
    userRole: editData?.userRole ?? "",
  });
  console.log("editData", editData);
  const [error, setError] = useState();
  const [roleData, setRoleData] = useState();
  const [isEdit, setIsEdit] = useState(location?.state?._id);

  const StoreData = useSelector((state) => state?.userRoleReducer);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllUserRole());
  }, []);

  useEffect(() => {
    const td = StoreData?.userRoleData?.map(({ name, _id }) => ({
      label: name,
      value: _id,
    }));
    console.log("td", td);
    setRoleData(td ? td : []);
  }, [StoreData]);

  const handleInputChange = (id, val) => {
    const event = isEventBased(id) ? id : null;
    const key = event ? event.target.id : id;
    let value = event ? event.target.value : val;
    const isUpload = key === "image";
    value = isUpload && event ? event.target.files[0] : value;
    const updatedError = { ...error };
    delete updatedError[key];
    setError(updatedError);
    setData({ ...data, [key]: value });
  };

  const isEventBased = (input) => !!input?.target?.id;

  const handleSubmit = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "mobile",
      "userRole",
      "password",
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
      if (isEdit) {
      } else {
        dispatch(postAddUser({ ...data, countryCode: "+91" }, navigate));
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
    roleData,
  };
}
