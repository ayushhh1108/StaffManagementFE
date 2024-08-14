import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteWorldofVishal, getWorldofVishal } from "./action";

export default function WorldofVishalHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.worldofVishalReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getWorldofVishal());
  }, []);
  console.log("StoreData", StoreData);
  useEffect(() => {
    const td = StoreData?.data?.map((item, index) => ({
      ...item,
      status: !item?.active ? "Inactive" : "Active",
      no: index + 1,
    }));
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-worldofvishal", {
      state: StoreData?.data?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log("handleDeletehandleDelete", deleteId);
    dispatch(deleteWorldofVishal({ _id: deleteId }, navigate));
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
