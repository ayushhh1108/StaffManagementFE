import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSubmit } from "./action";

export default function LoginPageHook() {
  const dispatch = useDispatch();
  const [creds, setCreds] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleInputChange = (props) => {
    const key = props?.target?.id;
    const value = props?.target?.value;
    console.log("setCreds", key, value);
    setCreds({ ...creds, [key]: value });
  };

  const handleSubmit = () => {
    console.log("handleSubmit", creds);
    dispatch(loginSubmit(creds,navigate))
  };
  return {
    navigate,
    handleSubmit,
    handleInputChange,
    creds
  };
}
