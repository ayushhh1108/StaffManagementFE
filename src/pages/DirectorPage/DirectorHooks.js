import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDirector, getDirectorsData } from "./action";

export default function DirectorHooks() {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
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
        shortDescription,
        instagram,
        facebook,
        twitter,
        linkedin,
        isDisable,
      }) => ({
        name,
        designation,
        experiance,
        description: shortDescription,
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

  const handleConfirmDelete = () => {
    console.log("handleDeletehandleDelete", deleteId);
    dispatch(deleteDirector({ _id: deleteId }, navigate));
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
