import React, { useState } from "react";
import "./index.scss";
import AddUsersPageHooks from "./AddUsersPageHooks";
import { Box, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";
import ClassicTextEditorr from "../../components/ClassicTextEditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SelectInput from "../../components/SelectInput";

function AddUserPage() {
  const { navigate } = AddUsersPageHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add User{" "}
        </Typography>
        <TextInput label={"First Name"} isRequire id={"first_name"} />
        <TextInput label={"Last Name"} isRequire id={"last_name"} />
        <TextInput label={"Email"} isRequire id={"email"} />
        <TextInput label={"Mobile"} isRequire id={"mobile"} />
        <SelectInput
          label={"Role"}
          isRequire
          id={"role"}
          options={[
            { label: "Employee", value: "employee" },
            { label: "Client", value: "client" },
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
export default AddUserPage;
