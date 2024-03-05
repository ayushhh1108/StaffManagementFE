import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationPageHook() {
  const navigate = useNavigate();
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Registration", url: "sign-up" },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return { breadData, navigate };
}
