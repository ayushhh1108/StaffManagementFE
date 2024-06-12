import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDealInItem, getDealInItems } from "./action";

export default function DealingItemHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.dealinItemsPageReducer);
  useEffect(() => {
    dispatch(getDealInItems());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const td = StoreData?.dealinItems?.map(
      ({ title, description, isDisable, _id }) => ({
        title,
        description,
        status: isDisable ? "In Active" : "Active",
        _id,
      })
    );
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-dealing-item", {
      state: StoreData?.dealinItems?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    console.log("handleDeletehandleDelete", deleteId);
    await dispatch(deleteDealInItem({ _id: deleteId }, navigate));
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
