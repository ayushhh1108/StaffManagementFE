import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LocalStorageManager from "../../utils/local-storage-manager";

export default function RegistrationPageHook() {
  const [creds, setCreds] = useState();
  const navigate = useNavigate();
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Registration", url: "sign-up" },
  ]);
  useEffect(() => {
    console.log(LocalStorageManager?.isUserAvailable(),"LocalStorageManager?.isUserAvailable()")
    if (LocalStorageManager?.isUserAvailable()) {
      toast.info("Already logged in.");
      navigate("/");
    }
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
  };

  return { breadData, navigate, handleInputChange, creds, handleSubmit };
}
