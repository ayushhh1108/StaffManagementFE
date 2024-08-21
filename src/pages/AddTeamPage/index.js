import React, { useState } from "react";
import "./index.scss";

import AddTeamHooks from "./AddTeamHooks";
import { Box, Typography } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";

function AddTeamPage() {
  const { handleSubmit, handleInputChange, data, error } = AddTeamHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Team Member{" "}
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
          label={"Short Description"}
          isRequire
          id={"shortDescription"}
          handleChanges={handleInputChange}
          value={data?.shortDescription}
          isError={error?.shortDescription}
        />
        <TextInput
          label={"Designation"}
          id={"designation"}
          handleChanges={handleInputChange}
          value={data?.designation}
          isError={error?.designation}
        />
        <TextInput
          label={"Facebook"}
          isRequire
          id={"facebook"}
          handleChanges={handleInputChange}
          value={data?.facebook}
          isError={error?.facebook}
        />
        <TextInput
          label={"Twitter"}
          isRequire
          id={"twitter"}
          handleChanges={handleInputChange}
          value={data?.twitter}
          isError={error?.twitter}
        />
        <TextInput
          label={"Instagram"}
          isRequire
          id={"instagram"}
          handleChanges={handleInputChange}
          value={data?.instagram}
          isError={error?.instagram}
        />
        <TextInput
          label={"Linkedin"}
          isRequire
          id={"linkedin"}
          handleChanges={handleInputChange}
          value={data?.linkedin}
          isError={error?.linkedin}
        />
        <div className="add-menu-input w-1/2 mb-5">
          <label
            for="first_name"
            className={
              error?.description
                ? "block mb-2 text-sm font-medium text-[red]"
                : "block mb-2 text-sm font-medium text-gray-900"
            }
          >
            Description
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={data?.description}
            onChange={(event, editor) => {
              handleInputChange({
                target: { value: editor?.getData(), id: "description" },
              });
            }}
          />
        </div>
        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone
            title={"Image"}
            id="image"
            onChanges={handleInputChange}
            isError={error?.image}
            selectedImg={data?.image}
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
export default AddTeamPage;
