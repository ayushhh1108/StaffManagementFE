import React, { useState } from "react";
import "./index.scss";

import AddCMSHooks from "./AddCMSHooks";
import { Box, Typography } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

function AddCMSPage() {
  const { navigate } = AddCMSHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add CMS{" "}
        </Typography>
        <SelectInput
          label={"Position"}
          isRequire
          id={"position"}
          options={[
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ]}
        />
        <SelectInput
          label={"Type"}
          isRequire
          id={"position"}
          options={[
            { label: "Page", value: "page" },
            { label: "Url", value: "url" },
          ]}
        />
        <TextInput label={"Page Name"} isRequire id={"page_name"} />
        <TextInput label={"Page Title"} isRequire id={"page_title"} />
        <TextInput label={"Short Description"} isRequire id={"short_desc"} />
        <TextInput label={"Meta Title "} isRequire id={"meta_title"} />
        <TextInput label={"Meta Keywords "} isRequire id={"meta_keywords"} />
        <TextInput
          label={"Meta Description "}
          isRequire
          id={"meta_description"}
        />
        <div className="add-menu-input w-1/2 mb-5">
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
        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone title={"Icon Image"} />
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
export default AddCMSPage;
