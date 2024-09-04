import React from "react";
import "./index.scss";
import WorldOfVishalHooks from "./WorldOfVishalHooks";
import { Box, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";

function AddWorldOfVishal() {
  const { navigate, handleSubmit, handleInputChange, data, error } =
    WorldOfVishalHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add World Of Vishal{" "}
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
          Cancel
        </button>
      </div>
    </Box>
  );
}
export default AddWorldOfVishal;
