import React, { useState } from "react";
import "./index.scss";

import AddTeamHooks from "./AddTeamHooks";
import { Box, Typography } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";

function AddTeamPage() {
  const { navigate } = AddTeamHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Team Member{" "}
        </Typography>
        <TextInput label={"Title"} isRequire id={"title"} />
        <TextInput
          label={"Short Description"}
          isRequire
          id={"short_description"}
        />
        <TextInput label={"Designation"} id={"designation"} />
        <TextInput label={"Facebook"} isRequire id={"facebook"} />
        <TextInput label={"Twiter"} isRequire id={"twiter"} />
        <TextInput label={"Instagram"} isRequire id={"instagram"} />
        <TextInput label={"Linkedin"} isRequire id={"linkedin"} />
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
export default AddTeamPage;
