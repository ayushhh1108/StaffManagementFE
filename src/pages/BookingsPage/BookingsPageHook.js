import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBooking, getAllBookingData } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function BookingsPageHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);

  const StoreData = useSelector((state) => state?.bookingDataReducer);
  useEffect(() => {
    dispatch(getAllBookingData());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.bookingData?.list?.map((item, index) => ({
      ...item,
      status: item?.status ? "active" : "non-active",
      _id: item._id,
      no: index + 1,
      property_name: item?.propertyId?.nameOfProject,
      action: (
        <p
          id={item?._id}
          onClick={handleDelete}
          style={{ color: "red", cursor: "pointer" }}
        >
          Delete
        </p>
      ),
    }));
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleDelete = (e) => {
    setDeleteId(e.target.id);
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    await dispatch(deleteBooking({ _id: deleteId }, navigate));
    await setOpen(false);
  };

  return {
    tableData,
    open,
    setOpen,
    handleConfirmDelete,
  };
}
