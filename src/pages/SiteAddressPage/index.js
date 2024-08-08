import React from "react";
import "./index.scss";
import SiteAddressHooks from "./SiteAddressHooks";
import { Box, Typography } from "@mui/material";
import TextInput from "../../components/TextInput";

function SiteAddressPage() {
  const { navigate, handleSubmit, handleInputChange, data, error} =
    SiteAddressHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Address{" "}
        </Typography>
        <TextInput
          label={"Address"}
          isRequire
          id={"address"}
          handleChanges={handleInputChange}
          value={data?.address}
          isError={error?.address}

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
          label={"State"}
          isRequire
          id={"state"}
          handleChanges={handleInputChange}
          value={data?.state}
          isError={error?.state}
        />
        <TextInput
          label={"Pincode"}
          isRequire
          id={"pinCode"}
          handleChanges={handleInputChange}
          value={data?.pinCode}
          isError={error?.pinCode}
        />
        <TextInput
          label={"Mobile"}
          isRequire
          id={"mobile"}
          handleChanges={handleInputChange}
          value={data?.mobile}
          isError={error?.mobile}
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
          label={"Timing"}
          isRequire
          id={"timing"}
          handleChanges={handleInputChange}
          value={data?.timing}
          isError={error?.timing}
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
export default SiteAddressPage;
