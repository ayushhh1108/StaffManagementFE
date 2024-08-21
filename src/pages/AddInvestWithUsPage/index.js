import React from "react";
import "./index.scss";
import AddInvestWithUsHooks from "./AddInvestWithUsHooks";
import { Box, Typography } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";

function AddInvestWithUsPage() {
  const {
    navigate,
    detailedInputValues,
    handleChangeInput,
    handleAddBox,
    handleDeleteBox,
    data,
    handleInputChange,
    handleSubmit,
  } = AddInvestWithUsHooks();

  const DetailedInputSection = (
    { title, desc, no },
    isAddtrue,
    isDeleteDisable
  ) => {
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
            onChange={(event, editor) => {
              handleChangeInput("desc", editor?.getData(), no);
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
            <Dropzone
              title={"Banner Image"}
              id="banner_image"
              onChanges={handleInputChange}
            />
          </div>
          <Box className="w-1/2 flex flex-wrap Main-Section-inputs items-center">
            <TextInput
              label={"Meta Title "}
              isRequire
              id={"meta_title"}
              handleChanges={handleInputChange}
              value={data?.meta_title}
            />
            <TextInput
              label={"Meta Keywords "}
              isRequire
              id={"meta_keywords"}
              handleChanges={handleInputChange}
              value={data?.meta_keywords}
            />
            <TextInput
              label={"Meta Description "}
              isRequire
              id={"meta_description"}
              handleChanges={handleInputChange}
              value={data?.meta_description}
            />
          </Box>
        </Box>
        <hr class="h-px mb-8 bg-gray-200 border-0" />
        <Typography variant="h5" className="mb-5 form-label">
          What We Do Section{" "}
        </Typography>
        <Box className="w-full flex flex-wrap Main-Section">
          <div className="upload-file-div mb-6 flex justify-between">
            <Dropzone
              title={"Image"}
              id="what_we_do_image"
              onChanges={handleInputChange}
            />
          </div>
          <Box className="w-1/2 flex flex-wrap Main-Section-inputs items-center">
            <TextInput
              label={"What we do header"}
              isRequire
              id={"what_we_do_header"}
              handleChanges={handleInputChange}
              value={data?.what_we_do_header}
            />
            <div className="add-menu-input w-1/2 mb-5">
              <CKEditor
                editor={ClassicEditor}
                data={data?.editor_desc}
                onChange={(event, editor) => {
                  handleInputChange({
                    target: { value: editor?.getData(), id: "editor_desc" },
                  });
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
          DetailedInputSection(
            item,
            detailedInputValues?.length == index + 1,
            detailedInputValues?.length == 1
          )
        )}
        <hr class="h-px mb-8 bg-gray-200 border-0" />
        <Typography variant="h5" className="mb-5 form-label">
          How To Invest Details{" "}
        </Typography>
        <TextInput
          label={"How to invest title"}
          isRequire
          id={"how_to_invest"}
          handleChanges={handleInputChange}
          value={data?.how_to_invest}
        />
        <Box className="w-full flex flex-wrap Main-Section">
          <div className="upload-file-div mb-6 flex justify-between">
            <Dropzone
              title={"Image"}
              id="how_to_invest_image1"
              onChanges={handleInputChange}
            />
          </div>
          <Box className="w-1/2 flex flex-wrap Main-Section-inputs items-center">
            <TextInput
              label={"Title"}
              isRequire
              id={"title1"}
              handleChanges={handleInputChange}
              value={data?.title1}
            />
            <div className="add-menu-input w-1/2 mb-5">
              <CKEditor
                editor={ClassicEditor}
                data={data?.how_to_invest_editor_desc1}
                onChange={(event, editor) => {
                  handleInputChange({
                    target: {
                      value: editor?.getData(),
                      id: "how_to_invest_editor_desc1",
                    },
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
          </Box>
        </Box>{" "}
        <Box className="w-full flex flex-wrap Main-Section">
          <div className="upload-file-div mb-6 flex justify-between">
            <Dropzone
              title={"Image"}
              id="how_to_invest_image2"
              onChanges={handleInputChange}
            />
          </div>
          <Box className="w-1/2 flex flex-wrap Main-Section-inputs items-center">
            <TextInput
              label={"Title"}
              isRequire
              id={"title2"}
              handleChanges={handleInputChange}
              value={data?.title2}
            />
            <div className="add-menu-input w-1/2 mb-5">
              <CKEditor
                editor={ClassicEditor}
                data={data?.how_to_invest_editor_desc2}
                onChange={(event, editor) => {
                  handleInputChange({
                    target: {
                      value: editor?.getData(),
                      id: "how_to_invest_editor_desc2",
                    },
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
          </Box>
        </Box>
        <Box className="w-full flex flex-wrap Main-Section">
          <div className="upload-file-div mb-6 flex justify-between">
            <Dropzone
              title={"Image"}
              id="how_to_invest_image3"
              onChanges={handleInputChange}
            />
          </div>
          <Box className="w-1/2 flex flex-wrap Main-Section-inputs items-center">
            <TextInput
              label={"Title"}
              isRequire
              id={"title3"}
              handleChanges={handleInputChange}
              value={data?.title3}
            />
            <div className="add-menu-input w-1/2 mb-5">
              <CKEditor
                editor={ClassicEditor}
                data={data?.how_to_invest_editor_desc3}
                onChange={(event, editor) => {
                  handleInputChange({
                    target: {
                      value: editor?.getData(),
                      id: "how_to_invest_editor_desc3",
                    },
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
          </Box>
        </Box>
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
export default AddInvestWithUsPage;
