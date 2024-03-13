import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUsersPageHooks() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    navigate,
  };
}
