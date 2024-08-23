import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteSubCMS } from "./action";

export default function SubCMSHook() {
  const navigate = useNavigate();
  const location = useLocation();
  const CMSID = location?.state?._id;
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!CMSID) {
      navigate("/cms-list");
    } else {
      const td = location?.state?.subCategory?.map((item, index) => ({
        ...item,
        status: !item?.isActive ? "Inactive" : "Active",
        no: 1 + index,
      }));
      setTableData(td ? td : []);
    }
  }, [location]);

  console.log("location", location?.state);

  const handleSubCMS = (props) => {
    navigate("/sub-cms", { state: { props } });
  };

  const handleEdit = ({ _id }) => {
    navigate("/add-subcms", {
      state: location?.state?.subCategory?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log("handleDeletehandleDelete", deleteId);
    dispatch(deleteSubCMS({ _id: deleteId }, navigate));
    setOpen(false);
    navigate("/cms-list");
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
    handleSubCMS,
    location,
  };
}
