import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteServiceReq, getServiceRequest } from "./action";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import BinIcon from "../../assets/icons/binIcon";

export default function ServiceInquiryHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState();
  const StoreData = useSelector((state) => state?.serviceRequestReducer);

  useEffect(() => {
    dispatch(getServiceRequest());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.ServiceRequestData?.map(
      ({ firstName, mobile, budget, _id, message, active }) => ({
        name: firstName,
        phone: mobile,
        budget,
        message,
        photo: "view",
        property_name: mobile,
        status: active ? "Active" : "Close",
        _id,
        action: (
          <div className="flex justify-evenly" id={_id} >
            <BinIcon id={_id} onClick={handleDelete} />{" "}
          </div>
        ),
      })
    );
    setTableData(td ? td : []);
  }, [StoreData]);
  const handleDelete = (event) => {
    setDeleteId(event?.target?.id);
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    await dispatch(deleteServiceReq({ _id: deleteId }, navigate));
    await setOpen(false);
  };

  return {
    navigate,
    tableData,
    open,
    setOpen,
    handleConfirmDelete,
  };
}
