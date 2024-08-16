import React from "react";
import "./index.scss";
import AddCMSHooks from "./AddCMSHooks";
import { Box, Typography } from "@mui/material";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

function AddCMSPage() {
  const { navigate, handleSubmit, handleInputChange, data, error } =
    AddCMSHooks();
  console.log("error", error);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add CMS{" "}
        </Typography>
        <TextInput
          label={"Name"}
          isRequire
          id={"name"}
          handleChanges={handleInputChange}
          value={data?.name}
          isError={error?.name}
        />
        <SelectInput
          label={"Select Status"}
          isRequire
          id={"status"}
          handleChange={handleInputChange}
          value={data?.status}
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
          isError={error?.status}
        />

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
export default AddCMSPage;
