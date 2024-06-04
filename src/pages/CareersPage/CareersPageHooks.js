import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCareers } from "./action";

export default function CareersPageHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const StoreData = useSelector((state) => state?.careersReducer);
  useEffect(() => {
    dispatch(getAllCareers());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.careersData?.map(
      ({
        designation,
        department,
        description,
        _id,
        experience,
        location,
        vacancy,
        active,
      }) => ({
        designation,
        department,
        experience,
        description,
        location,
        vacancy,
        active: active ? "Active" : "Inactive",
        _id,
      })
    );
    setTableData(td);
  }, [StoreData]);

  return {
    navigate,
    tableData,
  };
}
