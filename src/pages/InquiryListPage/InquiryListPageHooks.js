import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteInquery, getAllEnquiryData } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function InquiryListPageHooks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
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
    await dispatch(deleteInquery({ _id: deleteId }, navigate));
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
