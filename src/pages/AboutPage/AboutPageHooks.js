import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAboutpage, getAllAboutPageData } from "./action";

export default function AboutPageHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const StoreData = useSelector((state) => state?.aboutPageReducer);
  
  useEffect(() => {
    dispatch(getAllAboutPageData());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.aboutPageData?.map(
      ({ title, metaTitle, metaDescription, _id, imagePosition }) => ({
        image_position: imagePosition,
        title,
        metaTitle: metaTitle,
        metaDesc: metaDescription,
        _id,
      })
    );
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-about-page", {
      state: StoreData?.aboutPageData?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    console.log("handleDeletehandleDelete", deleteId);
    await dispatch(deleteAboutpage({ _id: deleteId }, navigate));
    await setOpen(false);
    await dispatch(getAllAboutPageData());
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
