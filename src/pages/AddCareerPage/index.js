import React, { useState } from "react";
import "./index.scss";
import AddCareerPageHooks from "./AddCareerPageHooks";
import { Box, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";
import ClassicTextEditorr from "../../components/ClassicTextEditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SelectInput from "../../components/SelectInput";

function AddCareerPage() {
  const { navigate } = AddCareerPageHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Career{" "}
        </Typography>
        <TextInput label={"Degination"} isRequire id={"degination"} />
        <TextInput label={"Department"} isRequire id={"department"} />
        <TextInput label={"Experience"} isRequire id={"experience"} />
        <TextInput label={"Location"} isRequire id={"location"} />
        <TextInput label={"No Of Vacancy"} isRequire id={"no_vacancy"} />
        <TextInput label={"Description"} isRequire id={"description"} />

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
export default AddCareerPage;
