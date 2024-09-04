import React from "react";
import "./index.scss";
import { Box, Typography } from "@mui/material";
import TextInput from "../../components/TextInput";
import LegacyPageHooks from "./LegacyPageHooks";
import Dropzone from "../../components/DropZone";

function LegacyPage() {
  const { handleSubmit, handleInputChange, data, error } = LegacyPageHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Legacy Section{" "}
        </Typography>
        <TextInput
          label={"No Of Clients"}
          isRequire
          id={"clients"}
          handleChanges={handleInputChange}
          value={data?.clients}
          isError={error?.clients}
          isNumber={true}
        />

        <TextInput
          label={"Client Description"}
          isRequire
          id={"clientDescription"}
          handleChanges={handleInputChange}
          value={data?.clientDescription}
          isError={error?.clientDescription}
        />

        <TextInput
          label={"No Of Years"}
          isRequire
          id={"years"}
          handleChanges={handleInputChange}
          value={data?.years}
          isError={error?.years}
          isNumber={true}
        />

        <TextInput
          label={"Year Description"}
          isRequire
          id={"yearDescription"}
          handleChanges={handleInputChange}
          value={data?.yearDescription}
          isError={error?.yearDescription}
        />

        <TextInput
          label={"No Of Projects"}
          isRequire
          id={"projects"}
          handleChanges={handleInputChange}
          value={data?.projects}
          isError={error?.projects}
          isNumber={true}
        />

        <TextInput
          label={"Projects Description"}
          isRequire
          id={"projectDescription"}
          handleChanges={handleInputChange}
          value={data?.projectDescription}
          isError={error?.projectDescription}
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
          label={"Description"}
          isRequire
          id={"description"}
          handleChanges={handleInputChange}
          value={data?.description}
          isError={error?.description}
        />

        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone
            title={"Landscape Image"}
            id="bgImage"
            onChanges={handleInputChange}
            isError={error?.bgImage}
            selectedImg={data?.bgImage}
          />
          <Dropzone
            title={"Portrait Image"}
            id="portraitImage"
            onChanges={handleInputChange}
            isError={error?.portraitImage}
            selectedImg={data?.portraitImage}
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
export default LegacyPage;
