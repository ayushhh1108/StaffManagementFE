import React from "react";
import "./index.scss";
import AddServiceHooks from "./AddServiceHooks";
import { Box, Typography } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import TextInput from "../../components/TextInput";

function AddServicePage() {
  const { navigate, handleSubmit, handleInputChange, data } = AddServiceHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Service{" "}
        </Typography>
        <TextInput
          label={"Header"}
          isRequire
          id={"header"}
          handleChanges={handleInputChange}
          value={data?.header}
        />
        <TextInput
          label={"Title"}
          isRequire
          id={"title"}
          handleChanges={handleInputChange}
          value={data?.title}
        />
        <TextInput
          label={"Meta Title"}
          handleChanges={handleInputChange}
          value={data?.meta_title}
          isRequire
          id={"meta_title"}
        />
        <TextInput
          label={"Meta Keywords"}
          handleChanges={handleInputChange}
          value={data?.meta_keywords}
          isRequire
          id={"meta_keywords"}
        />
        <TextInput
          label={"Meta Descripion"}
          isRequire
          id={"meta_description"}
          handleChanges={handleInputChange}
          value={data?.meta_description}
        />
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
