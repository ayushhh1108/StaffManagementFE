import * as React from "react";
import "./index.scss";

const viewImage = (selectedImg) => {
  const data = [...selectedImg]?.map((item) => (
    <div className={"img-box"}>
      <img
        src={typeof item === "string" ? item : URL?.createObjectURL(item)}
        alt=""
        className="main-image"
      />
    </div>
  ));
  return data;
};

export default function Dropzone({
  title,
  id,
  onChanges,
  selectedImg,
  isError,
  isMultiple,
}) {
  return (
    <div className="dropzone-box flex flex-wrap items-center justify-center w-[48%] mb-3">
      <label
        for="last_name"
        className="block mb-2 text-sm font-medium text-gray-900 w-full"
      >
        {title}*
      </label>
      <div className="selected-image-box flex">
        {selectedImg && isMultiple ? (
          <>{viewImage(selectedImg, isMultiple)}</>
        ) : (
          selectedImg && (
            <div className={"img-box"}>
              <img
                src={
                  typeof selectedImg === "string"
                    ? selectedImg
                    : URL?.createObjectURL(selectedImg)
                }
                alt=""
                className="main-image"
              />
            </div>
          )
        )}
      </div>
      <label
        for={id ? id : "dropzone-banner-image"}
        className={
          isError
            ? "dropzone flex flex-col items-center justify-center w-full h-52 border-2 border-red-300 border-dashed rounded-lg cursor-pointer bg-red-50"
            : "dropzone flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
        }
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
        </div>
        <input
          id={id ? id : "dropzone-banner-image"}
          onChange={onChanges}
          type="file"
          multiple={isMultiple}
          accept="image/png, image/jpeg, application/pdf"
          className="hidden"
        />
      </label>
    </div>
  );
}
