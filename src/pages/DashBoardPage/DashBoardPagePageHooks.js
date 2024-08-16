import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPropertyData } from "../PropertyListPage/action";
import { getAllEnquiryData } from "../InquiryListPage/action";
import { getAllBookingData } from "../BookingsPage/action";

export default function DashBoardPagePageHook() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllPropertyData());
    dispatch(getAllEnquiryData());
    dispatch(getAllBookingData());
  }, []);

  return {
    navigate,
    storeData,
  };
}
