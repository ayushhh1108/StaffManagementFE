import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteSupplier, getSupplierPageData } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function SupplierHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);

  const StoreData = useSelector((state) => state?.supplierDataReducer);
  useEffect(() => {
    dispatch(getSupplierPageData());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const td = StoreData?.supplierData?.list?.map((item, index) => ({
      ...item,
      status: item?.isActive ? "active" : "non-active",
      _id: item._id,
      name: item.firstName,
      supplier_of: item.supplierOf,
      no: index + 1,
      action: <IoCheckmarkDoneOutline className="mx-auto" />,
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
    dispatch(deleteSupplier({ _id: deleteId }, navigate));
    setOpen(false);
    await dispatch(getSupplierPageData());
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
