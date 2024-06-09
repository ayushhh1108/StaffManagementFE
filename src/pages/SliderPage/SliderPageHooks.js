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
  const StoreData = useSelector((state) => state?.sliderReducer);
  useEffect(() => {
    dispatch(getAllSlider());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.sliderData?.list?.map(
      ({ name, description, metaTitle, _id, metaDescription }) => ({
        name,
        description,
        metaTitle,
        metaDesc: metaDescription,
        _id,
      })
    );
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-slider", {
      state: StoreData?.sliderData?.list?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
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
