import React from "react";
import "./index.scss";
import AddSupplierHooks from "./AddSupplierHooks";
import { Box, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

function AddSupplierPage() {
  const { navigate, handleSubmit, handleInputChange, data, error } =
    AddSupplierHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Supplier{" "}
        </Typography>
        <TextInput
          label={"First Name"}
          isRequire
          id={"firstName"}
          handleChanges={handleInputChange}
          value={data?.firstName}
          isError={error?.firstName}
        />
        <TextInput
          label={"Last Name"}
          isRequire
          id={"lastName"}
          handleChanges={handleInputChange}
          value={data?.lastName}
          isError={error?.lastName}
        />
        <TextInput
          label={"Company Name"}
          isRequire
          id={"companyName"}
          handleChanges={handleInputChange}
          value={data?.companyName}
          isError={error?.companyName}
        />
        <SelectInput
          label={"Position/Job Role"}
          isRequire
          id={"role"}
          handleChange={handleInputChange}
          value={data?.role}
          isError={error?.role}
          options={[
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ]}
        />
        <TextInput
          label={"Mobile"}
          isRequire
          id={"mobile"}
          handleChanges={handleInputChange}
          value={data?.mobile}
          isError={error?.mobile}
          isNumber
        />
        <TextInput
          label={"Email"}
          isRequire
          id={"email"}
          handleChanges={handleInputChange}
          value={data?.email}
          isError={error?.email}
        />
        <TextInput
          label={"City"}
          isRequire
          id={"city"}
          handleChanges={handleInputChange}
          value={data?.city}
          isError={error?.city}
        />
        <TextInput
          label={"Location"}
          isRequire
          id={"location"}
          handleChanges={handleInputChange}
          value={data?.location}
          isError={error?.location}
        />
        <SelectInput
          label={"Supplier of"}
          isRequire
          id={"supplierOf"}
          handleChange={handleInputChange}
          value={data?.supplierOf}
          isError={error?.supplierOf}
          options={[
            { label: "Marble", value: "marble" },
            { label: "Bricks", value: "bricks" },
          ]}
        />
        <TextInput
          label={"Message"}
          isRequire
          id={"message"}
          handleChanges={handleInputChange}
          value={data?.message}
          isError={error?.message}
        />
        <div className="upload-file-div mb-6 flex justify-between">
          <Dropzone
            title={"Banner"}
            id="file"
            isError={error?.file}
            selectedImg={data?.file}
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
export default AddSupplierPage;
