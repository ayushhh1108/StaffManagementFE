import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddInvestWithUsHooks() {
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
    console.log("oldData", oldData);

    // Update the value for the specified key
    const updatedData = { ...oldData, [key]: value };

    // // Update the data in the new array
    newData = newData.map((item) => (item?.no === no ? updatedData : item));

    // // Set the new state
    setDetailedInputValues(newData);
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
    console.log("newData",newData);
    setDetailedInputValues(newData);
  };

  return {
    navigate,
    detailedInputValues,
    handleChangeInput,
    handleAddBox,
    handleDeleteBox,
  };
}
