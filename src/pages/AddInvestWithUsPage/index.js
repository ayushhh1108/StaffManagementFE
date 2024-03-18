import React, { useState } from "react";
import "./index.scss";

import AddInvestWithUsHooks from "./AddInvestWithUsHooks";
import { Box, Typography } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

function AddInvestWithUsPage() {
  const {
    navigate,
    detailedInputValues,
    handleChangeInput,
    handleAddBox,
    handleDeleteBox,
  } = AddInvestWithUsHooks();

  const DetailedInputSection = ({ title, desc, no }, isAddtrue,isDeleteDisable) => {
    return (
      <Box className="details-inputs my-3">
        <TextInput
          label={"Title"}
          isRequire
          id={"title"}
          value={title}
          handleChanges={(id, value) => handleChangeInput("title", value, no)}
        />
        <div className="text-editor-input w-1/2 mb-5">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={desc}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              // console.log("Editor is ready to use!", editor);
              console.log("isAddtrue", isAddtrue);
            }}
            onChange={(event, editor) => {
              handleChangeInput("desc", editor?.getData(), no);
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
          disabled={isDeleteDisable}
          onClick={() => handleDeleteBox(no)}
          className="text-white bg-[#b3b4b7] hover:bg-[#818183] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Delete
        </button>
        {isAddtrue && (
          <button
            type="button"
            onClick={() => handleAddBox(no)}
            className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2"
          >
            Add
          </button>
        )}
      </Box>
    );
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Main Section{" "}
        </Typography>
        <Box className="w-full flex flex-wrap Main-Section">
          <div className="upload-file-div mb-6 flex justify-between">
            <Dropzone title={"Banner Image"} />
          </div>
          <Box className="w-1/2 flex flex-wrap Main-Section-inputs items-center">
            <TextInput label={"Meta Title "} isRequire id={"meta_title"} />
            <TextInput
              label={"Meta Keywords "}
              isRequire
              id={"meta_keywords"}
            />
            <TextInput
              label={"Meta Description "}
              isRequire
              id={"meta_description"}
            />
          </Box>
        </Box>
        <hr class="h-px mb-8 bg-gray-200 border-0" />
        <Typography variant="h5" className="mb-5 form-label">
          What We Do Section{" "}
        </Typography>
        <Box className="w-full flex flex-wrap Main-Section">
          <div className="upload-file-div mb-6 flex justify-between">
            <Dropzone title={"Image"} />
          </div>
          <Box className="w-1/2 flex flex-wrap Main-Section-inputs items-center">
            <TextInput
              label={"What we do header"}
              isRequire
              id={"what_we_do_header"}
            />
            <div className="add-menu-input w-1/2 mb-5">
              <CKEditor
                editor={ClassicEditor}
                data=""
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  // console.log("Editor is ready to use!", editor);
                }}
                onChange={(event) => {
                  console.log(event);
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </div>
          </Box>
        </Box>
        <hr class="h-px mb-8 bg-gray-200 border-0" />
        <Typography variant="h5" className="mb-5 form-label">
          What We Do Details{" "}
        </Typography>
        {detailedInputValues?.map((item, index) =>
          DetailedInputSection(item, detailedInputValues?.length == index + 1, detailedInputValues?.length == 1)
        )}
        <hr class="h-px mb-8 bg-gray-200 border-0" />
        <Typography variant="h5" className="mb-5 form-label">
          How To Invest Details{" "}
        </Typography>
        <TextInput
          label={"How to invest title"}
          isRequire
          id={"how_to_invest"}
        />
        <Box className="w-full flex flex-wrap Main-Section">
          <div className="upload-file-div mb-6 flex justify-between">
            <Dropzone title={"Image"} />
          </div>
          <Box className="w-1/2 flex flex-wrap Main-Section-inputs items-center">
            <TextInput label={"Title"} isRequire id={"title1"} />
            <div className="add-menu-input w-1/2 mb-5">
              <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={(event) => {
                  console.log(event);
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </div>
          </Box>
        </Box>{" "}
        <Box className="w-full flex flex-wrap Main-Section">
          <div className="upload-file-div mb-6 flex justify-between">
            <Dropzone title={"Image"} />
          </div>
          <Box className="w-1/2 flex flex-wrap Main-Section-inputs items-center">
            <TextInput label={"Title"} isRequire id={"title1"} />
            <div className="add-menu-input w-1/2 mb-5">
              <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={(event) => {
                  console.log(event);
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </div>
          </Box>
        </Box>
        <Box className="w-full flex flex-wrap Main-Section">
          <div className="upload-file-div mb-6 flex justify-between">
            <Dropzone title={"Image"} />
          </div>
          <Box className="w-1/2 flex flex-wrap Main-Section-inputs items-center">
            <TextInput label={"Title"} isRequire id={"title1"} />
            <div className="add-menu-input w-1/2 mb-5">
              <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={(event) => {
                  console.log(event);
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </div>
          </Box>
        </Box>
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
export default AddInvestWithUsPage;
