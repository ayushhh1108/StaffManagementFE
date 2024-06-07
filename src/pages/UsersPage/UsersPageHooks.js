import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, getAllUsers } from "./action";

export default function UsersPageHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.usersReducer);

  useEffect(() => {
    dispatch(getAllUsers());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.userData?.map(
      ({ userRole, lastName, email, firstName, _id, mobile }) => ({
        first_name: firstName,
        last_name: lastName,
        email,
        mobile,
        role: userRole,
        _id,
      })
    );
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-user", {
      state: StoreData?.userData?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  console.log("handleDeletehandleDelete", StoreData);
  const handleConfirmDelete = async () => {
    await dispatch(deleteUser({ _id: deleteId }, navigate));
    await setOpen(false);
    await dispatch(getAllUsers());
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
