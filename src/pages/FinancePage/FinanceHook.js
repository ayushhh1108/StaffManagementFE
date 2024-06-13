import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFinance, getFinanceData } from "./action";

export default function FinanceHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.financeReducer);

  useEffect(() => {
    dispatch(getFinanceData());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.financeData?.map(
      ({ title, description, _id, active }) => ({
        title,
        description,
        status: active ? "Active" : "Inactive",
        _id,
      })
    );
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    console.log(
      "StoreData?.careersData?.find((item) => item?._id === _id)",
      StoreData?.financeData?.find((item) => item?._id === _id)
    );
    navigate("/add-finance", {
      state: StoreData?.financeData?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  console.log("handleDeletehandleDelete", StoreData);
  const handleConfirmDelete = async () => {
    await dispatch(deleteFinance({ _id: deleteId }, navigate));
    await setOpen(false);
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
