import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCallbackdata } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function CallbackListPageHook () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const StoreData = useSelector((state) => state?.callbackPageReducer);

  useEffect(() => {
    dispatch(getCallbackdata());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.callbackData?.list?.map(
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
