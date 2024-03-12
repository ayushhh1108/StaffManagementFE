import React, { useState } from "react";
import "./index.scss";

import AddSliderPageHook from "./AddSliderPageHooks";
import { Box, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";

function AddSliderPage() {
  const { navigate } = AddSliderPageHook();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Home Slider{" "}
        </Typography>
        <div>
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name*
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 mb-4 add-menu-input"
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
            id="last_name"
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 add-menu-input"
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
            id="last_name"
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 add-menu-input"
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
            id="last_name"
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 add-menu-input"
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
            id="last_name"
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-1/2 p-2.5 add-menu-input"
            placeholder="Meta Description"
            required
          />
        </div>
        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone title={"Upload Image"} />
        </div>

        <button
          type="button"
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Save
        </button>
        <button
          type="button"
          className="text-white bg-[#b3b4b7] hover:bg-[#818183] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Cencel
        </button>
      </div>
    </Box>
  );
}
export default AddSliderPage;
