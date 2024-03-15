import React, { useState } from "react";
import "./index.scss";

import SiteAddressHooks from "./SiteAddressHooks";
import { Box, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";

function SiteAddressPage() {
  const { navigate } = SiteAddressHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Address{" "}
        </Typography>
        <TextInput label={"Address"} isRequire id={"address"} />
        <TextInput label={"City"} isRequire id={"city"} />
        <TextInput label={"State"} isRequire id={"state"} />
        <TextInput label={"Pincode"} isRequire id={"pincode"} />
        <TextInput label={"Mobile"} isRequire id={"mobile"} />
        <TextInput label={"Email"} isRequire id={"email"} />
        <TextInput label={"Timing"} isRequire id={"timing"} />

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
export default SiteAddressPage;
