import React, { useState } from "react";
import "./index.scss";
import AddAboutPageHooks from "./AddAboutPageHooks";
import { Box, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";
import ClassicTextEditorr from "../../components/ClassicTextEditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SelectInput from "../../components/SelectInput";

function AddAboutPage() {
  const { navigate } = AddAboutPageHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add About Page{" "}
        </Typography>
        <TextInput label={"Title"} isRequire id={"title"} />
        <TextInput label={"Meta Title"} isRequire id={"meta_title"} />
        <TextInput label={"Meta Keywords"} isRequire id={"meta_keywords"} />
        <TextInput
          label={"Meta Description"}
          isRequire
          id={"meta_description"}
        />

        <div className="add-menu-input w-1/2 mb-5">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <CKEditor
            editor={ClassicEditor}
            data=""
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event) => {
              console.log(event);
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>

        <SelectInput
          label={"Image Position"}
          isRequire
          id={"position"}
          options={[
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ]}
        />

        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone title={"Image"} />
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
export default AddAboutPage;
