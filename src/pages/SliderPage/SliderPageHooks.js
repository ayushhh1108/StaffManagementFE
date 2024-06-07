import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteSlider, getAllSlider } from "./action";

export default function SliderPageHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState();
  const StoreData = useSelector((state) => state?.blogsPageReducer);
  useEffect(() => {
    dispatch(getAllSlider());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.blogsData?.map(
      ({ title, description, metaTitle, _id, sortDescription }) => ({
        title,
        description,
        metaTitle,
        metaDesc: sortDescription,
        _id,
      })
    );
    setTableData(td);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-slider", {
      state: StoreData?.blogsData?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    console.log("handleDeletehandleDelete", deleteId);
    await dispatch(deleteSlider({ _id: deleteId }, navigate));
    await setOpen(false);
  };

  return {
    navigate,
    tableData,
    handleEdit,
    handleDelete,
    open,
    setOpen,
    handleConfirmDelete,
  };
}
