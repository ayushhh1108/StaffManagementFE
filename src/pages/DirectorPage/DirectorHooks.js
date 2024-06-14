import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDirectorsData } from "./action";

export default function DirectorHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.directorPageReducer);

  useEffect(() => {
    dispatch(getDirectorsData());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.directorsData?.list?.map(
      ({
        name,
        designation,
        experiance,
        _id,
        description,
        instagram,
        facebook,
        twitter,
        linkedin,
        isDisable,
      }) => ({
        name,
        designation,
        experiance,
        description,
        instagram,
        facebook,
        twitter,
        linkedin,
        status: isDisable ? "Inactive" : "Active",
        _id,
      })
    );
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-director", {
      state: StoreData?.directorsData?.list?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    console.log("handleDeletehandleDelete", deleteId);
    // await dispatch(deleteAboutpage({ _id: deleteId }, navigate));
    await setOpen(false);
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
