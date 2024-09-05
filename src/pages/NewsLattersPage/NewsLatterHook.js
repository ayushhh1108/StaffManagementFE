import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteNewsLater, getAllNewsLaters } from "./action";
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
      action: (
        <p
          id={_id}
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
    await dispatch(deleteNewsLater({ _id: deleteId }, navigate));
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
