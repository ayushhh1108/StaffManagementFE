import React, { useState } from "react";
import "./index.scss";

import AddAboutUsHooks from "./AddAboutUsHooks";
import { Box, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";

function AddAboutUsPage() {
  const { navigate } = AddAboutUsHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add About us{" "}
        </Typography>
        <TextInput label={"Header"} isRequire id={"header"} />
        <TextInput label={"Title"} isRequire id={"title"} />
        <TextInput label={"Descripion"} isRequire id={"description"} />
        <TextInput label={"Meta Title"} isRequire id={"meta_title"} />
        <TextInput label={"Meta Keywords"} isRequire id={"meta_keywords"} />
        <TextInput
          label={"Meta Descripion"}
          isRequire
          id={"meta_description"}
        />
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
export default AddAboutUsPage;
