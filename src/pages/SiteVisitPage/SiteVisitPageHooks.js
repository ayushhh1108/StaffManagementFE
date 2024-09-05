import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteInquery, deleteSiteVisit, getAllSiteVisitData } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { TableData } from "../ContactUsPage/constant";

export default function SiteVisitPageHooks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);

  const StoreData = useSelector((state) => state?.siteVisitDataReducer);

  useEffect(() => {
    dispatch(getAllSiteVisitData());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const td = StoreData?.siteVisitData?.list?.map((item, index) => ({
      ...item,
      status: item?.status ? "active" : "non-active",
      _id: item._id,
      no: index + 1,
      action: (
        <p
          id={item?._id}
          onClick={handleDelete}
          style={{ color: "red", cursor: "pointer" }}
        >
          Delete
        </p>
      ),
    }));
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleDelete = (e) => {
    setDeleteId(e.target.id);
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    await dispatch(deleteSiteVisit({ _id: deleteId }, navigate));
    await setOpen(false);
  };

  return {
    navigate,
    tableData,
    handleDelete,
    open,
    setOpen,
    handleConfirmDelete,
  };
}
