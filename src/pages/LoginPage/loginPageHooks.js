import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSubmit } from "./action";
import { toast } from "react-toastify";
import LocalStorageManager from "../../utils/local-storage-manager";

export default function LoginPageHook() {
  const dispatch = useDispatch();
  const [creds, setCreds] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (LocalStorageManager?.isUserAvailable()) {
      toast.info("Already logged in.");
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, []);
  const handleInputChange = (props) => {
    const key = props?.target?.id;
    const value = props?.target?.value;
    setCreds({ ...creds, [key]: value });
  };

  const handleSubmit = () => {
    dispatch(loginSubmit(creds, navigate));
  };
  return {
    navigate,
    handleSubmit,
    handleInputChange,
    creds,
  };
}
