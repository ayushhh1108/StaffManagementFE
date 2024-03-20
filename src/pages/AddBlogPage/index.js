import React from "react";
import "./index.scss";
import AddBlogPageHook from "./AddBlogPageHooks";
import { Box, Typography } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "../../components/DropZone";

function AddBlogPage() {
  const { navigate, handleSubmit, handleInputChange, data } = AddBlogPageHook();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Blog{" "}
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 mb-4 add-menu-input"
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
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 add-menu-input"
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
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 add-menu-input"
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
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 add-menu-input"
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
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-1/2 p-2.5 add-menu-input"
            placeholder="Meta Description"
            required
          />
        </div>
        <div className="add-menu-input w-1/2 mb-5">
          <CKEditor
            editor={ClassicEditor}
            data={data?.editor_desc}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              handleInputChange({
                target: { value: editor?.getData(), id: "editor_desc" },
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
              title={"Banner Image"}
              id="banner_image"
              onChanges={handleInputChange}
            />
          <Dropzone title={"Image"} id="image" onChanges={handleInputChange} />
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
