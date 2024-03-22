import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddInvestWithUsHooks() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [detailedInputValues, setDetailedInputValues] = useState([
    { title: "", desc: "", no: 1 },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChangeInput = (key, value, no) => {
    // Create a new array to avoid mutating the original state
    let newData = [...detailedInputValues];

    // Get the old data object
    const oldData = newData.find((item) => item.no === no);

    // Update the value for the specified key
    const updatedData = { ...oldData, [key]: value };

    // // Update the data in the new array
    newData = newData.map((item) => (item?.no === no ? updatedData : item));

    // // Set the new state
    setDetailedInputValues(newData);
    setData({ ...data, what_we_do_details: newData });
  };

  const handleAddBox = (no) => {
    const newData = [
      ...detailedInputValues,
      { title: "", desc: "", no: no + 1 },
    ];
    setDetailedInputValues(newData);
  };

  const handleDeleteBox = (no) => {
    const newData = detailedInputValues?.filter((item) => item.no !== no);
    console.log("newData", newData);
    setDetailedInputValues(newData);
  };

  const handleInputChange = (id, val) => {
    const event = isEventBased(id) ? id : null;
    const key = event ? event.target.id : id;
    const value = event
      ? isUpload(key)
        ? event.target.files[0]
        : event.target.value
      : val;
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  const isUpload = (key) => {
    const uploadKeys = [
      "banner_image",
      "what_we_do_image",
      "how_to_invest_image",
      "how_to_invest_image1",
      "how_to_invest_image2",
      "how_to_invest_image3",
    ];
    return uploadKeys.includes(key);
  };

  const isEventBased = (input) => !!input?.target?.id;

  const handleSubmit = () => {
    console.log("handleSubmit", data);
    // dispatch(loginSubmit(creds,navigate))
  };

  return {
    navigate,
    detailedInputValues,
    handleChangeInput,
    handleAddBox,
    handleDeleteBox,
    data,
    handleInputChange,
    handleSubmit,
  };
}
