import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllContactUsData } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { Phone } from "@mui/icons-material";

export default function AboutPageHooks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();

  const StoreData = useSelector((state) => state?.contactUsDataReducer);
  console.log("Hello", StoreData.contactUsData?.list);

  useEffect(() => {
    dispatch(getAllContactUsData());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const td = StoreData?.contactUsData?.list?.map((item, index) => ({
      ...item,
      status: item?.isResolved ? "not-active" : "active",
      phone: item?.mobile,
      _id: item._id,
      no: index + 1,
      action: <IoCheckmarkDoneOutline className="mx-auto" />,
    }));
    setTableData(td ? td : []);
  }, [StoreData]);

  return {
    navigate,
    tableData,
  };
}
