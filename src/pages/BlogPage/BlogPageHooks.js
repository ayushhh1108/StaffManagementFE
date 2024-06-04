import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllblogs } from "./action";

export default function MenuPageHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();
  const StoreData = useSelector((state) => state?.blogsPageReducer);
  useEffect(() => {
    dispatch(getAllblogs());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.blogsData?.map(
      ({ title, description, metaTitle, _id, sortDescription }) => ({
        title,
        description,
        metaTitle,
        metaDesc: sortDescription,
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
