import React, { useState } from "react";
import "./index.scss";

import AddFeedbackPageHook from "./AddFeedbackPageHooks";
import { Box, Rating, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";

function AddFeedbackPage() {
  const { navigate } = AddFeedbackPageHook();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Feedback{" "}
        </Typography>
        <TextInput label={"Name"} isRequire id={"name"} />
        <TextInput label={"City"} isRequire id={"city"} />
        <TextInput label={"Comment"} isRequire id={"comment"} />
        <div>
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Rating
          </label>
          <Rating
            name="rating"
            //  value={state.rating} onChange={inputChange}
          />
        </div>
        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone title={"Icon Image"} />
          <Dropzone title={"Property Image"} />
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
export default AddFeedbackPage;
