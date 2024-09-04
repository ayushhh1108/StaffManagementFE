import React, { useState } from "react";
import "./index.scss";

import AddFeedbackPageHook from "./AddFeedbackPageHooks";
import { Box, Rating, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";

function AddFeedbackPage() {
  const { navigate, handleSubmit, handleInputChange, data, error } =
    AddFeedbackPageHook();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Feedback{" "}
        </Typography>
        <TextInput
          label={"Name"}
          isRequire
          id={"name"}
          handleChanges={handleInputChange}
          value={data?.name}
          isError={error?.name}
        />
        <TextInput
          label={"City"}
          isRequire
          id={"city"}
          handleChanges={handleInputChange}
          value={data?.city}
          isError={error?.city}
        />
        <TextInput
          label={"Message"}
          isRequire
          id={"message"}
          handleChanges={handleInputChange}
          value={data?.message}
          isError={error?.message}
        />
        <div>
          {console.log("error", error)}
          <label
            className={`block mb-2 text-sm font-medium text-${
              error?.rating ? "[red]" : "gray-900"
            }`}
          >
            Rating
          </label>
          <Rating
            id="rating"
            name="rating"
            value={data?.rating}
            onChange={handleInputChange}
          />
        </div>
        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone
            title={"Icon Image"}
            id="icon_image"
            onChanges={handleInputChange}
            isError={error?.icon_image}
            selectedImg={data?.icon_image}
          />
          <Dropzone
            title={"Property Image"}
            id="property_image"
            onChanges={handleInputChange}
            isError={error?.property_image}
            selectedImg={data?.property_image}
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
export default AddFeedbackPage;
