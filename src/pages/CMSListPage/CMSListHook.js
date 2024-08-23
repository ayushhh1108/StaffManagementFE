import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCMS, getCMSlist } from "./action";

export default function CMSListHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.CMSReducer);
  useEffect(() => {
    dispatch(getCMSlist());
    window.scrollTo(0, 0);
  }, []);

  const handleSubCMS = (props) => {
    navigate("/sub-cms", { state: { ...props } });
  };

  useEffect(() => {
    setTableData(StoreData?.CMSData ? StoreData?.CMSData : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-cms", {
      state: StoreData?.CMSData?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteCMS({ _id: deleteId }));
    setOpen(false);
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
  };
}
