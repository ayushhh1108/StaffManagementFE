import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSubmit } from "./action";
import { isAuthenticated } from "../../utils/auth";
import { toast } from "react-toastify";

export default function LoginPageHook() {
  const dispatch = useDispatch();
  const [creds, setCreds] = useState();
  const [isForget, setIsForget] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuthenticated(), "isAuthenticated()isAuthenticated()");
    if (isAuthenticated()) {
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
    isForget,
    setIsForget,
  };
}
