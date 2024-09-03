import React from "react";
import "./index.scss";
import AddAboutPageHooks from "./AddAboutPageHooks";
import { Box, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SelectInput from "../../components/SelectInput";

function AddAboutPage() {
  const { navigate, handleSubmit, handleInputChange, data, error } =
    AddAboutPageHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add About Page{" "}
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
          label={"Meta Description"}
          isRequire
          id={"meta_description"}
          handleChanges={handleInputChange}
          value={data?.meta_description}
          isError={error?.meta_description}
        />

        <div className="add-menu-input w-1/2 mb-5">
          <label
            for="first_name"
            className={
              error?.editor_desc
                ? "block mb-2 text-sm font-medium text-[red]"
                : "block mb-2 text-sm font-medium text-gray-900"
            }
          >
            Description
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={data?.editor_desc}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
            }}
            onChange={(event, editor) => {
              handleInputChange("editor_desc", editor?.getData());
            }}
          />
        </div>

        <SelectInput
          label={"Image Position"}
          isRequire
          id={"position"}
          handleChange={handleInputChange}
          value={data?.position}
          options={[
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ]}
          isError={error?.position}
        />

        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone
            title={"Image"}
            id="image"
            isError={error?.image}
            selectedImg={data?.image}
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
export default AddAboutPage;
