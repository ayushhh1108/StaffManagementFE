import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteProperty,
  getPropertyData,
  getSearchedPropertyData,
} from "./action";
import { getLocalStorageData } from "../../utils/auth";

export default function PropertyListHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const user = getLocalStorageData();

  const StoreData = useSelector((state) => state?.propertyDataReducer);

  useEffect(() => {
    dispatch(getPropertyData());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.propertyData?.map((item, index) => ({
      ...item,
      no: index + 1,
      addedBy: user?.user?.isStaff
        ? user?.user?.parentAgent?.name
        : user?.user?.name,
      type: user?.user?.isStaff
        ? user?.user?.parentAgent?.type
        : user?.user?.type,
      createdDate: "",
    }));
    setTableData(td ? td : []);
  }, [StoreData]);

  useEffect(() => {
    searchQuery && dispatch(getSearchedPropertyData(searchQuery));
    searchQuery && setTableData([]);
    if (!searchQuery) {
      setTableData([]);
      dispatch(getPropertyData());
    }
  }, [searchQuery]);

  const handleEdit = ({ _id }) => {
    navigate("/add-property", {
      state: StoreData?.propertyData?.find((item) => item?._id === _id),
    });
  };

  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
    console.log("dellllll", _id);
  };
  console.log("tableDatatableDatatableDatatableDatatableData", tableData);
  const handleConfirmDelete = async () => {
    dispatch(deleteProperty({ _id: deleteId }, navigate));
    setOpen(false);
    await dispatch(getPropertyData());
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
