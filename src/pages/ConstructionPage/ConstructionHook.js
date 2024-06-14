import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getConstructionProcess } from "./action";
import { useDispatch, useSelector } from "react-redux";

export default function ConstructionHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.constructionPageReducer);

  useEffect(() => {
    dispatch(getConstructionProcess());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.constructionData?.map(
      ({ title, description, _id, active }) => ({
        title,
        description,
        status: !active ? "Inactive" : "Active",
        _id,
      })
    );
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    console.log("_id_id_id", _id);
    navigate("/add-construction-process", {
      state: StoreData?.constructionData?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log("handleDeletehandleDelete", deleteId);
    // dispatch(deleteDirector({ _id: deleteId }, navigate));
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
