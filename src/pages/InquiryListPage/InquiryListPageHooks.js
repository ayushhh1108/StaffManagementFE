import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllEnquiryData } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function InquiryListPageHooks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();

  const StoreData = useSelector((state) => state?.enquiryDataReducer);

  useEffect(() => {
    dispatch(getAllEnquiryData());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.enquiryData?.list?.map((item, index) => ({
      ...item,
      status: item?.status ? "active" : "non-active",
      _id: item._id,
      no: index + 1,
      action: <IoCheckmarkDoneOutline className="mx-auto" />,
    }));
    setTableData(td ? td : []);
  }, [StoreData]);
  console.log("hellotrrt", StoreData?.enquiryData);
  return {
    navigate,
    tableData,
  };
}
