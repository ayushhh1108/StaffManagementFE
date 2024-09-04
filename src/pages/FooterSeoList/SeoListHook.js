import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  deleteSEO, getSEOlist } from "./action";

export default function SEOListHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.SEOReducer);
  useEffect(() => {
    dispatch(getSEOlist());
    window.scrollTo(0, 0);
  }, []);

  const handleSubCMS = (props) => {
    navigate("/sub-cms", { state: { ...props } });
  };

  useEffect(() => {
    setTableData(StoreData?.SEOData ? StoreData?.SEOData : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-seo", {
      state: StoreData?.SEOData?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteSEO({ _id: deleteId }));
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
