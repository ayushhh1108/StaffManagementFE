import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCallbackData } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function CallbackListPageHook () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();

  const StoreData = useSelector((state) => state?.callBackDataReducer);

  useEffect(() => {
    dispatch(getAllCallbackData());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const td = StoreData?.callBackData?.list?.map((item,index) => ({
      ...item,
      status: item?.status ? "active" : "non-active",
      _id: item._id,
      no: index,
      action: <IoCheckmarkDoneOutline className="mx-auto" />,
    }));
    setTableData(td ? td : []);
  }, [StoreData]);
  console.log("hellotrrt", StoreData?.callBackData);

  return {
    navigate,
    tableData,
  };
}
