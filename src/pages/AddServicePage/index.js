import React from "react";
import "./index.scss";
import AddServiceHooks from "./AddServiceHooks";
import { Box, Typography } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import TextInput from "../../components/TextInput";
import Dropzone from "../../components/DropZone";

function AddServicePage() {
  const { navigate, handleSubmit, handleInputChange, data, error } =
    AddServiceHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Service{" "}
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
          label={"Sub Title"}
          isRequire
          id={"subtitle"}
          handleChanges={handleInputChange}
          value={data?.subtitle}
          isError={error?.subtitle}
        />
        <TextInput
          label={"Sub Description"}
          handleChanges={handleInputChange}
          value={data?.subDescription}
          isRequire
          id={"subDescription"}
          isError={error?.subDescription}
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
            Description*
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={data?.description}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              handleInputChange({
                target: { value: editor?.getData(), id: "description" },
              });
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
          <Dropzone
            title={"Images"}
            id="imageGallery"
            isError={error?.imageGallery}
            selectedImg={data?.imageGallery}
            onChanges={handleInputChange}
            isMultiple={true}
          />{" "}
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
export default AddServicePage;
