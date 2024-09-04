import React from "react";
import "./index.scss";
import AddConstructionHooks from "./AddConstructionHooks";
import { Box, Typography } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

function AddConstructionPage() {
  const { navigate, handleSubmit, handleInputChange, data, error } =
    AddConstructionHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Construction Process{" "}
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
          label={"Tag Line"}
          isRequire
          id={"metaTitle"}
          handleChanges={handleInputChange}
          value={data?.metaTitle}
          isError={error?.metaTitle}
        />
        <TextInput
          label={"Meta Title"}
          isRequire
          id={"metaKeywords"}
          handleChanges={handleInputChange}
          value={data?.metaKeywords}
          isError={error?.metaKeywords}
        />
        <TextInput
          label={"Meta Description "}
          isRequire
          id={"metaDescription"}
          handleChanges={handleInputChange}
          value={data?.metaDescription}
          isError={error?.metaDescription}
        />
        <SelectInput
          label={"Image Position"}
          isRequire
          id={"imagePosition"}
          handleChange={handleInputChange}
          value={data?.imagePosition}
          options={[
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ]}
          isError={error?.imagePosition}
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
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
            }}
            onChange={(event, editor) => {
              handleInputChange({
                target: { value: editor?.getData(), id: "description" },
              });
            }}
          />
        </div>
        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone
            title={"Upload Image"}
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
export default AddConstructionPage;
