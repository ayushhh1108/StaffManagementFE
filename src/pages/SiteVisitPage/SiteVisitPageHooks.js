import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSiteVisitData } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { TableData } from "../ContactUsPage/constant";


export default function SiteVisitPageHooks () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();

  const StoreData = useSelector((state) => state?.siteVisitDataReducer);

  useEffect(() => {
    dispatch(getAllSiteVisitData());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const td = StoreData?.siteVisitData?.list?.map((item,index) => ({
      ...item,
      status: item?.status ? "active" : "non-active",
      _id: item._id,
      no: index,
      action: <IoCheckmarkDoneOutline className="mx-auto" />,
    }));
    setTableData(td ? td : []);
  }, [StoreData]);
  console.log("hello", StoreData?.siteVisitData?.list);
  return {
    navigate,
    tableData,
  };
}
