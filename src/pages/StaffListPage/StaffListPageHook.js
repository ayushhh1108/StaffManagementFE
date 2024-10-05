import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteStaff, getSearchedStaffData, getStaffData } from "./action";

export default function StaffListHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const StoreData = useSelector((state) => state?.staffDataReducer);

  useEffect(() => {
    dispatch(getStaffData());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.staffData?.map((item, index) => ({
      ...item,
      no: index + 1,
    }));
    setTableData(td ? td : []);
  }, [StoreData]);

  useEffect(() => {
    searchQuery && dispatch(getSearchedStaffData(searchQuery));
    searchQuery && setTableData([]);
    if (!searchQuery) {
      setTableData([]);
      dispatch(getStaffData());
    }
  }, [searchQuery]);

  const handleEdit = ({ _id }) => {
    navigate("/add-staff", {
      state: StoreData?.staffData?.find((item) => item?._id === _id),
    });
  };

  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
    console.log("dellllll", _id);
  };
  const handleConfirmDelete = async () => {
    console.log("handleDeletehandleDelete", deleteId);
    dispatch(deleteStaff({ _id: deleteId }, navigate));
    setOpen(false);
    await dispatch(getStaffData());
  };
  return {
    navigate,
    tableData,
    handleDelete,
    open,
    setOpen,
    handleConfirmDelete,
    handleEdit,
    searchQuery,
    setSearchQuery,
  };
}
