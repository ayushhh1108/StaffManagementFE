import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/auth";
import LocalStorageManager from "../../utils/local-storage-manager";

export default function AccountPageHooks() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
    setUser(LocalStorageManager?.getLocalStorage("user"));
  }, []);

  return {
    navigate,
    user,
  };
}
