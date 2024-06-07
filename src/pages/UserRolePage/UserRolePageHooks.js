import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteRole, getAllUserRole } from "./action";

export default function UserRolePageHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.userRoleReducer);
  useEffect(() => {
    dispatch(getAllUserRole());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.userRoleData?.map(({ name, status, _id }) => ({
      name,
      status,
      _id,
    }));
    console.log("td", td);
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-role", {
      state: StoreData?.userRoleData?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    console.log("handleDeletehandleDelete", deleteId);
    await dispatch(deleteRole({ _id: deleteId }, navigate));
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
