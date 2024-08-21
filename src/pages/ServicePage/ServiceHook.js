import { useState, useEffect } from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteServices, getServicePageData } from "./action";

export default function ServiceHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);

  const StoreData = useSelector((state) => state?.serviceDataReducer);
  console.log("helooooo" , StoreData?.serviceData);
  useEffect(() => {
    dispatch(getServicePageData());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const td = StoreData?.serviceData?.map((item, index) => ({
      ...item,
      status: !item?.isDisable ? "active" : "non-active",
      no: index + 1,
      description: item.subDescription,
    }));
    setTableData(td ? td : []);
  }, [StoreData]);
  console.log("hellotrrt", tableData);

  const handleEdit = ({ _id }) => {
    navigate("/add-supplier", {
      state: StoreData?.supplierData?.list?.find((item) => item?._id === _id),
    });
  };

  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
    console.log("dellllll", _id);
  };
  const handleConfirmDelete = async () => {
    console.log("handleDeletehandleDelete", deleteId);
    dispatch(deleteServices({ _id: deleteId }, navigate));
    setOpen(false);
    await dispatch(getServicePageData());
  };
  return {
    navigate,
    tableData,
    handleDelete,
    open,
    setOpen,
    handleConfirmDelete,
    handleEdit,
  };
}
