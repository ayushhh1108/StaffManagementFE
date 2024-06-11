import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllNewsLaters } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function NewsLatterHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState();
  const StoreData = useSelector((state) => state?.newslaterReducer);
  useEffect(() => {
    dispatch(getAllNewsLaters());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const td = StoreData?.newsLaterData?.map(({ email, _id, status }) => ({
      status: status ? "active" : "not-active",
      email,
      _id,
      action: <IoCheckmarkDoneOutline className="mx-auto" />,
    }));
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  console.log("handleDeletehandleDelete", tableData);
  const handleConfirmDelete = async () => {
    // await dispatch(deleteNewsLater({ _id: deleteId }, navigate));
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
