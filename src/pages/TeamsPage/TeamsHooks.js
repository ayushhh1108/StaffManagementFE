import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTeamMember, getTeamMembers } from "./action";
import { useDispatch, useSelector } from "react-redux";

export default function TeamsHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.teamMembersReducer);

  useEffect(() => {
    dispatch(getTeamMembers());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const td = StoreData?.teamMemberData?.list?.map(
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
    navigate("/add-team", {
      state: StoreData?.teamMemberData?.list?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log("handleDeletehandleDelete", deleteId);
    dispatch(deleteTeamMember({ _id: deleteId }, navigate));
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
