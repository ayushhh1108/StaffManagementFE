import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDealIn, getDealinData } from "./action";

export default function DealingHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.dealInPageReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getDealinData());
  }, []);
  console.log("StoreData", StoreData);
  useEffect(() => {
    const td = StoreData?.dealInData?.map((item, index) => ({
      ...item,
      status: !item?.active ? "Inactive" : "Active",
      no: index,
    }));
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-dealing", {
      state: StoreData?.dealInData?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log("handleDeletehandleDelete", deleteId);
    dispatch(deleteDealIn({ _id: deleteId }, navigate));
    setOpen(false);
    // await dispatch(getDirectorsData());
  };

  

  return {
    navigate,
    tableData,
    handleEdit,
    handleDelete,
    open,
    setOpen,
    handleConfirmDelete,
  };
}
