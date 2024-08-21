import React from "react";
import "./index.scss";
import AddBlogPageHook from "./AddBlogPageHooks";
import { Box, Typography } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "../../components/DropZone";

function AddBlogPage() {
  const { handleSubmit, handleInputChange, data, error, isEdit } =
    AddBlogPageHook();
  const normalInputClass =
    "mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 add-menu-input";
  const errorInputClass =
    "mb-4 bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg block w-1/2 p-2.5 add-menu-input";

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          {isEdit ? "Edit Blog" : "Add Blog"}{" "}
        </Typography>
        <div>
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title*
          </label>
          <input
            type="text"
            id="title"
            value={data?.title}
            onChange={handleInputChange}
            className={error?.title ? errorInputClass : normalInputClass}
            placeholder="Title"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Short Description*
          </label>
          <input
            type="text"
            id="short_desc"
            value={data?.short_desc}
            onChange={handleInputChange}
            className={error?.short_desc ? errorInputClass : normalInputClass}
            placeholder="Short Description"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Meta Title*
          </label>
          <input
            type="text"
            id="meta_title"
            value={data?.meta_title}
            onChange={handleInputChange}
            className={error?.meta_title ? errorInputClass : normalInputClass}
            placeholder="Meta Title"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Meta Keywords*
          </label>
          <input
            type="text"
            id="meta_key"
            value={data?.meta_key}
            onChange={handleInputChange}
            className={error?.meta_key ? errorInputClass : normalInputClass}
            placeholder="Meta Keywords"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Meta Description*
          </label>
          <input
            type="text"
            id="meta_desc"
            value={data?.meta_desc}
            onChange={handleInputChange}
            className={error?.meta_desc ? errorInputClass : normalInputClass}
            placeholder="Meta Description"
            required
          />
        </div>
        <div className="add-menu-input w-1/2 mb-5">
          <label
            for="description"
            className={
              error?.editor_desc
                ? "block mb-2 text-sm font-medium text-[red]"
                : "block mb-2 text-sm font-medium text-gray-900"
            }
          >
            Description*
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={data?.editor_desc}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
            }}
            onChange={(event, editor) => {
              handleInputChange({
                target: { value: editor?.getData(), id: "editor_desc" },
              });
            }}
            onError={error?.editor_desc}
          />
        </div>
        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone
            title={"Banner Image"}
            id="banner_image"
            onChanges={handleInputChange}
            selectedImg={data?.banner_image}
            isError={error?.banner_image}
          />
          <Dropzone
            title={"Image"}
            id="image"
            onChanges={handleInputChange}
            selectedImg={data?.image}
            isError={error?.image}
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
export default AddBlogPage;
