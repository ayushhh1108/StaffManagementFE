import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInquiriesdata } from "./action";
import { useNavigate } from "react-router-dom";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function InquiryListPageHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const StoreData = useSelector((state) => state?.inquiryPageReducer);

  useEffect(() => {
    dispatch(getInquiriesdata());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.inquiriesData?.list?.map(
      ({ name, phone, time, _id, place, message, email, status }) => ({
        name,
        phone,
        time,
        place,
        action: <IoCheckmarkDoneOutline className="mx-auto" />,
        status: status ? "Complete" : "Active",
        message,
        email,
        _id,
      })
    );
    setTableData(td ? td : []);
  }, [StoreData]);

  console.log("StoreDataStoreData", StoreData);

  return {
    navigate,
    tableData,
  };
}
