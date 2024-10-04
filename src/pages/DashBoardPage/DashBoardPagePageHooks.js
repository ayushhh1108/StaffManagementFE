import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DashBoardPagePageHook() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    navigate,
    storeData,
  };
}
