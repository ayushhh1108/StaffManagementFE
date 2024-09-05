import React from "react";
import "./index.scss";
import { Box, Typography } from "@mui/material";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import AddSeoHooks from "./AddSeoHooks";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function AddFooterSeo() {
  const { navigate, handleSubmit, handleInputChange, data, error, isEdit } =
    AddSeoHooks();
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          {isEdit ? "Edit " : "Add"} SEO{" "}
        </Typography>
        {/* <TextInput
          label={"Page Name"}
          isRequire
          id={"title"}
          handleChanges={handleInputChange}
          value={data?.title}
          isError={error?.title}
        /> */}
        <SelectInput
          label={"Page Name"}
          isRequire
          id={"title"}
          handleChange={handleInputChange}
          value={data?.title}
          options={[
            { label: "Landing Page", value: "LandingPage" },
            { label: "About Company", value: "AboutCompany" },
            { label: "About Directors", value: "AboutDirectors" },
            { label: "Construction Process", value: "ConstructionProcess" },
            { label: "Properties Page", value: "PropertiesPage" },
            { label: "Property Detail Page", value: "PropertyDetailPage" },
            { label: "Service Page", value: "ServicePage" },
            { label: "Career Page", value: "CareerPage" },
            { label: "ContactUs Page", value: "ContactUsPage" },
            { label: "Finance Page", value: "FinancePage" },
            { label: "Blog Page", value: "BlogPage" },
            { label: "Blog Detail Page", value: "BlogDetailPage" },
            { label: "Post Property Page", value: "PostPropertyPage" },
            { label: "CMS Page", value: "CMSPage" },
            { label: "Login Page", value: "LoginPage" },
            { label: "Register Page", value: "RegisterPage" },
            { label: "Online Booking Page", value: "OnlineBookingPage" },
            { label: "Service Detail Page", value: "ServiceDetailsPage" },
            { label: "Supplier Form", value: "SupplierForm" },
          ]}
          isError={error?.title}
        />
        <TextInput
          label={"URL"}
          isRequire
          id={"url"}
          handleChanges={handleInputChange}
          value={data?.url}
          isError={error?.url}
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
export default AddFooterSeo;
