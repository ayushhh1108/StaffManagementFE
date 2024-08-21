import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/auth";

export default function AccountPageHooks() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
    setUser(JSON.parse(getToken()));
  }, []);

  return {
    navigate,
    user,
  };
}
