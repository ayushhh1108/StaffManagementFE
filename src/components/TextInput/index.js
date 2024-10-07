import * as React from "react";
import "./index.scss";
import { useState } from "react";

export default function TextInput({
  label,
  isRequire,
  id,
  value,
  handleChanges,
  isError,
  isNumber,
  placeholder,
  disabled,
}) {
  const [val, setVal] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    if (isNumber) {
      const numValue = value.replace(/\D/g, "");
      handleChanges
        ? handleChanges(id, Number(numValue))
        : setVal(Number(numValue));
    } else {
      handleChanges ? handleChanges(id, value) : setVal(value);
    }
  };
  const errorClass =
    "bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg block w-1/2 p-2.5 mb-4 add-menu-input";
  const normalClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 mb-4 add-menu-input";
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
        className={isError ? errorClass : normalClass}
        placeholder={label}
        name={label}
        required
        disabled={disabled}
        value={value ? value : val}
      />
    </div>
  );
}
