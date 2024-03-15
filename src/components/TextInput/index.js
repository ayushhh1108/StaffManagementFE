import * as React from "react";
import "./index.scss";
import { useState } from "react";

export default function TextInput({
  label,
  isRequire,
  id,
  value,
  handleChanges,
}) {
  const [val, setVal] = useState("");
  const handleChange = (event) => {
    // console.log("handleChange",event.target.value,value,onChange)
    handleChanges
      ? handleChanges(id, event.target.value)
      : setVal(event.target.value);
  };
  return (
    <div>
      <label
        for="first_name"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
        {isRequire ? "*" : ""}
      </label>
      <input
        type="text"
        id={id}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 mb-4 add-menu-input"
        placeholder={label}
        required
        value={value ? value : val}
      />
    </div>
  );
}
