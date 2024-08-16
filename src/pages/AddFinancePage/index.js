import React from "react";
import "./index.scss";
import AddFinanceHooks from "./AddFinanceHooks";
import { Box, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";

function AddFinancePage() {
  const { handleSubmit, handleInputChange, data, error } = AddFinanceHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        {/* <Typography variant="h5" className="mb-5 form-label">
          Add Finance{" "}
        </Typography> */}
        <TextInput
          label={"Tag"}
          isRequire
          id={"tagLine"}
          handleChanges={handleInputChange}
          value={data?.tagLine}
          isError={error?.tagLine}
        />
        <TextInput
          label={"Title"}
          isRequire
          id={"title1"}
          handleChanges={handleInputChange}
          value={data?.title1}
          isError={error?.title1}
        />
        <TextInput
          label={"Description"}
          isRequire
          id={"description1"}
          handleChanges={handleInputChange}
          value={data?.description1}
          isError={error?.description1}
        />
        <TextInput
          label={"Title 2"}
          isRequire
          id={"title2"}
          handleChanges={handleInputChange}
          value={data?.title2}
          isError={error?.title2}
        />
        <TextInput
          label={"Description 2"}
          isRequire
          id={"description2"}
          handleChanges={handleInputChange}
          value={data?.description2}
          isError={error?.description2}
        />
        <TextInput
          label={"Title 3"}
          isRequire
          id={"title3"}
          handleChanges={handleInputChange}
          value={data?.title3}
          isError={error?.title3}
        />
        <TextInput
          label={"Description 3"}
          isRequire
          id={"description3"}
          handleChanges={handleInputChange}
          value={data?.description3}
          isError={error?.description3}
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
            title={"Bank Image"}
            id="bankImage"
            onChanges={handleInputChange}
            isError={error?.bankImage}
            selectedImg={data?.bankImage}
            isMultiple={true}
          />
          <Dropzone
            title={"Banner Image"}
            id="bannerImage"
            isError={error?.bannerImage}
            selectedImg={data?.bannerImage}
            onChanges={handleInputChange}
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
export default AddFinancePage;
