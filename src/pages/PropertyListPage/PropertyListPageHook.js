import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteProperty,
  getPropertyData,
  getSearchedPropertyData,
} from "./action";
export function formatDateToYYYYMMDD(isoString) {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, '0');
  
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  // Determine AM or PM
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, make it 12

  return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
}


export default function PropertyListHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const StoreData = useSelector((state) => state?.propertyDataReducer);

  useEffect(() => {
    dispatch(getPropertyData());
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   const td = StoreData?.propertyData?.map((item, index) => ({
  //     ...item,
  //     no: index + 1,
  //   }));
  //   setTableData(td ? td : []);
  // }, [StoreData]);

  useEffect(() => {
    const td = StoreData?.propertyData?.map((item, index) => {
      let obj ={
        ...item,
        no: index + 1,
        createdAt: formatDateToYYYYMMDD(item?.createdAt ?? new Date()),
      }
    delete obj.addedBy;
    delete obj.type;
    return obj
    });
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
