import * as React from "react";
import "./index.scss";

export default function SelectInput({ label, isRequire, id, options }) {
  return (
    <div>
      <label
        for="first_name"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
        {isRequire ? "*" : ""}
      </label>
      <select
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#164e63] focus:border-[#164e63] block p-2.5 mb-4 add-menu-input w-1/2"
      >
        <option selected>Choose {label}</option>
        {options?.map((item) => (
          <option value={item?.value}>{item?.label}</option>
        ))}
      </select>
    </div>
  );
}
