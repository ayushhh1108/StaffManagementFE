import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, apiEndPoints } from "../../api";
import { toast } from "react-toastify";
import { isNotthenSecondParameter } from "../../utils/helper";
import SelectInput from "../../components/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { deleteProperty, getAllPropertyData } from "./action";

export default function PropertyListHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector(
    (state) => state?.propertyReducer?.propertyData
  );
  const [allProperty, setAllProperty] = useState([]);
  const getAllProperty = async () => {
    try {
      if (StoreData?.data) {
        toast.success(
          isNotthenSecondParameter(
            StoreData?.data?.message,
            "Get Property Data Successfull"
          )
        );
        const allProperty = StoreData?.data?.data?.list?.length
          ? StoreData?.data?.data?.list.map((item, index) => {
              return {
                ...item,
                no: 1 + index,
                status: item?.active == "true" ? "active" : "close",
              };
            })
          : [];

        setAllProperty(allProperty || []);
      } else if (StoreData?.response?.data?.message) {
        toast.error(StoreData?.response?.data?.message);
      }
    } catch (error) {}
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllPropertyData());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllProperty();
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-property", {
      state: StoreData?.data?.data?.list?.find((item) => item?._id === _id),
    });
  };

  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteProperty({ _id: deleteId }, navigate));
    setOpen(false);
  };

  return {
    navigate,
    allProperty,
    handleDelete,
    handleEdit,
    handleConfirmDelete,
    setOpen,
    open,
  };
}
