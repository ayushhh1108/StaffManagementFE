import React, { useState } from "react";
import "./index.scss";

import AddDealingHooks from "./AddDealingHooks";
import { Box, Typography } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";

function AddDealingPage() {
  const { navigate, handleSubmit, handleInputChange, error, data } =
    AddDealingHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Dealing{" "}
        </Typography>
        <TextInput
          label={"Title"}
          isRequire
          id={"title"}
          handleChanges={handleInputChange}
          value={data?.title}
          isError={error?.title}
        />
        <TextInput
          label={"Description"}
          isRequire
          id={"description"}
          handleChanges={handleInputChange}
          value={data?.description}
          isError={error?.description}
        />
        <TextInput
          label={"Meta Title"}
          isRequire
          id={"metaTitle"}
          handleChanges={handleInputChange}
          value={data?.metaTitle}
          isError={error?.metaTitle}
        />
        <TextInput
          label={"Meta Keywords"}
          isRequire
          id={"metaKeywords"}
          handleChanges={handleInputChange}
          value={data?.metaKeywords}
          isError={error?.metaKeywords}
        />
        <TextInput
          label={"Meta Descripion"}
          isRequire
          id={"metaDescription"}
          handleChanges={handleInputChange}
          value={data?.metaDescription}
          isError={error?.metaDescription}
        />

        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone
            title={"Icon"}
            id="iconImage"
            onChanges={handleInputChange}
            isError={error?.iconImage}
            selectedImg={data?.iconImage}
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
          Cencel
        </button>
      </div>
    </Box>
  );
}
export default AddDealingPage;
