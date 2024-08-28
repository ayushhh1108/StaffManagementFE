import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBlog, getAllblogs } from "./action";

export default function MenuPageHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState();
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState();
  const StoreData = useSelector((state) => state?.blogsPageReducer);
  useEffect(() => {
    dispatch(getAllblogs());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const td = StoreData?.blogsData?.map(
      ({ title, description, metaTitle, _id, sortDescription }) => ({
        title,
        description,
        metaTitle,
        sortDescription,
        _id,
      })
    );
    setTableData(td ? td : []);
  }, [StoreData]);

  const handleEdit = ({ _id }) => {
    navigate("/add-blog", {
      state: StoreData?.blogsData?.find((item) => item?._id === _id),
    });
  };
  const handleDelete = ({ _id }) => {
    setDeleteId(_id);
    setOpen(true);
  };

  const handleConfirmDelete = async() => {
    console.log("handleDeletehandleDelete", deleteId);
    await dispatch(deleteBlog({ _id: deleteId }, navigate));
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
