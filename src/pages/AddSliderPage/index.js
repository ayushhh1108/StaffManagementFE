import React from "react";
import "./index.scss";

import AddSliderPageHook from "./AddSliderPageHooks";
import { Box, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import SelectInput from "../../components/SelectInput";

function AddSliderPage() {
  const { navigate, handleSubmit, handleInputChange, data, error, isEdit } =
    AddSliderPageHook();
  const normalInputClass =
    "mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 add-menu-input";
  const errorInputClass =
    "mb-4 bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg block w-1/2 p-2.5 add-menu-input";

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          {isEdit ? "Edit Home Slider" : "Add Home Slider"}{" "}
        </Typography>
        <div>
          {console.log("error", error)}
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name*
          </label>
          <input
            type="text"
            id="name"
            className={error?.name ? errorInputClass : normalInputClass}
            value={data?.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description*
          </label>
          <input
            type="text"
            id="desc"
            value={data?.desc}
            onChange={handleInputChange}
            className={error?.desc ? errorInputClass : normalInputClass}
            placeholder="Description"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Meta Title*
          </label>
          <input
            type="text"
            id="meta_title"
            value={data?.meta_title}
            onChange={handleInputChange}
            className={error?.meta_title ? errorInputClass : normalInputClass}
            placeholder="Meta Title"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Meta Keywords*
          </label>
          <input
            type="text"
            id="meta_key"
            value={data?.meta_key}
            onChange={handleInputChange}
            className={error?.meta_key ? errorInputClass : normalInputClass}
            placeholder="Meta Keywords"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Meta Description*
          </label>
          <input
            type="text"
            id="meta_desc"
            value={data?.meta_desc}
            onChange={handleInputChange}
            className={error?.meta_desc ? errorInputClass : normalInputClass}
            placeholder="Meta Description"
            required
          />
        </div>
        <SelectInput
          label={"Description Position"}
          isRequire
          id={"descriptionPosition"}
          handleChange={handleInputChange}
          value={data?.descriptionPosition}
          options={[
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ]}
          isError={error?.descriptionPosition}
        />
        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone
            title={"Upload Image"}
            id="upload_image"
            onChanges={handleInputChange}
            selectedImg={data?.upload_image}
            isError={error?.upload_image}
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Save
        </button>
        <button
          type="button"
          className="text-white bg-[#b3b4b7] hover:bg-[#818183] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Cancel
        </button>
      </div>
    </Box>
  );
}
export default AddSliderPage;
