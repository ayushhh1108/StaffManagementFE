import * as React from "react";
import "./index.scss";

export default function SelectInput({
  label,
  isRequire,
  id,
  options,
  handleChange,
  value,
  isError,
}) {
  return (
    <div>
      <label
        for="first_name"
        className={`block mb-2 text-sm font-medium text-${
          isError ? "[red]" : "gray-900"
        }`}
      >
        {label}
        {isRequire ? "*" : ""}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className={`bg-${isError ? "red" : "gray"}-50 border border-${
          isError ? "red" : "gray"
        }-300 text-${
          isError ? "red" : "gray"
        }-900 text-sm rounded-lg focus:ring-[#164e63] focus:border-[#164e63] block p-2.5 mb-4 add-menu-input w-1/2`}
      >
        <option selected>Choose {label}</option>
        {options?.map((item) => (
          <option value={item?.value}>{item?.label}</option>
        ))}
      </select>
    </div>
  );
}
