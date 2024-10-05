import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LocalStorageManager from "../../utils/local-storage-manager";
import { fields } from "./constant";
import { registrationSubmit } from "./action";
import { useDispatch } from "react-redux";

export default function RegistrationPageHook() {
  const locationData = useLocation();
  const [creds, setCreds] = useState();
  const [formname, setFormName] = useState(
    locationData?.state ?? "Company Account"
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Registration", url: "sign-up" },
  ]);
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
    console.log("setCreds", key, value);
    setCreds({ ...creds, [key]: value });
  };

  const handleSubmit = () => {
    const newFields = ["website", "companyName"];
    const requiredFields =
      formname === "Company Account"
        ? fields?.map((i) => i.id)
        : fields?.filter((i) => !newFields.includes(i.id))?.map((i) => i.id);
    let error = {};
    let isFormValid = true;

    requiredFields.forEach((field) => {
      if (!creds?.[field]) {
        error[field] = true;
        isFormValid = false;
      }
    });
    console.log("newFields", error, isFormValid, creds, requiredFields);

    if (isFormValid) {
      dispatch(
        registrationSubmit(
          creds,
          !(formname === "Company Account")
            ? "auth/signup-agent"
            : "auth/signup-company-agent",
          navigate
        )
      );
    }
  };

  return {
    breadData,
    navigate,
    handleInputChange,
    creds,
    handleSubmit,
    formname,
    setFormName,
  };
}
