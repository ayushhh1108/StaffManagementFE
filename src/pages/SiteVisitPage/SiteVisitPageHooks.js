import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSiteVisits } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function SiteVisitPageHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const StoreData = useSelector((state) => state?.siteVisitPageReducer);

  useEffect(() => {
    dispatch(getSiteVisits());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.siteVisitData?.list?.map(
      ({ name, phone, time, _id, message, email, status }) => ({
        name,
        phone,
        time,
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
