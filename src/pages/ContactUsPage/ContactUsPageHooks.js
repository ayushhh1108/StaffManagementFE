import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getContactUs } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function AboutPageHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const StoreData = useSelector((state) => state?.contactUsPageReducer);

  useEffect(() => {
    dispatch(getContactUs());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.contactUsData?.list?.map(
      ({ name, mobile, subject, _id, message, email, isResolved }) => ({
        name,
        phone: mobile,
        action: <IoCheckmarkDoneOutline className="mx-auto" />,
        status: isResolved ? "Complete" : "Active",
        subject,
        message,
        email,
        _id,
      })
    );
    setTableData(td ? td : []);
  }, [StoreData]);

  return {
    navigate,
    tableData,
  };
}
