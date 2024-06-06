import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCareer, getAllCareers } from "./action";

export default function CareersPageHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.careersReducer);
  useEffect(() => {
    dispatch(getAllCareers());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.careersData?.map(
      ({
        designation,
        department,
        description,
        _id,
        experience,
        location,
        vacancy,
        active,
      }) => ({
        designation,
        department,
        experience,
        description,
        location,
        vacancy,
        active: active ? "Active" : "Inactive",
        _id,
      })
    );
    setTableData(td);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    console.log(
      "StoreData?.careersData?.find((item) => item?._id === _id)",
      StoreData?.careersData?.find((item) => item?._id === _id)
    );
    navigate("/add-career", {
      state: StoreData?.careersData?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    console.log("handleDeletehandleDelete", deleteId);
    await dispatch(deleteCareer({ _id: deleteId }, navigate));
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
