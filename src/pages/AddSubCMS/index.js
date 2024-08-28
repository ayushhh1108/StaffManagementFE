import React from "react";
import "./index.scss";
import { Box, Typography } from "@mui/material";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import AddSubCMSHooks from "./AddSubCMSHooks";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dropzone from "../../components/DropZone";

function AddSubCMSPage() {
  const { navigate, handleSubmit, handleInputChange, data, error, isEdit } =
    AddSubCMSHooks();

  const renderTextInput = (label, id, isRequire = false, isNumber = false) => (
    <TextInput
      label={label}
      isRequire={isRequire}
      id={id}
      handleChanges={handleInputChange}
      value={data?.[id]}
      isError={error?.[id]}
      isNumber={isNumber}
    />
  );

  const renderSelectInput = (label, id, options) => (
    <SelectInput
      label={label}
      isRequire
      id={id}
      handleChange={handleInputChange}
      value={data?.[id]}
      options={options}
      isError={error?.[id]}
    />
  );

  const renderCKEditor = (label, id) => (
    <div className="add-menu-input w-1/2 mb-5">
      <label
        htmlFor={id}
        className={
          error?.[id]
            ? "block mb-2 text-sm font-medium text-[red]"
            : "block mb-2 text-sm font-medium text-gray-900"
        }
      >
        {label}*
      </label>
      <CKEditor
        editor={ClassicEditor}
        data={data?.[id]}
        onChange={(event, editor) => {
          handleInputChange({
            target: { value: editor?.getData(), id },
          });
        }}
      />
    </div>
  );

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          {isEdit ? "Edit" : "Add"} SubCMS
        </Typography>

        {renderSelectInput("Type", "type", [
          { label: "Url", value: "url" },
          { label: "Page", value: "page" },
        ])}

        {renderTextInput("Title", "title", true)}
        {renderTextInput("Slug", "slug", true)}
        {renderTextInput("Order Number", "orderNo", true, true)}

        {data?.type === "url" ? (
          <>
            {renderTextInput("URL", "url", true)}
            {renderSelectInput("Active", "isActive", [
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ])}
          </>
        ) : (
          <>
            {renderCKEditor("Description", "description")}
            {renderTextInput("Meta Title", "metaTitle", true)}
            {renderTextInput("Meta Keywords", "metaKey", true)}
            {renderTextInput("Meta Description", "metaDescription", true)}
            {renderSelectInput("Banner Type", "bannerType", [
              { label: "Image", value: "image" },
              { label: "Video", value: "video" },
            ])}
            <Dropzone
              title={"Banner media"}
              id="bannerMedia"
              isError={error?.bannerMedia}
              selectedImg={data?.bannerMedia?.[0]}
              onChanges={handleInputChange}
            />
            {renderSelectInput("Active", "isActive", [
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ])}
          </>
        )}

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

export default AddSubCMSPage;
