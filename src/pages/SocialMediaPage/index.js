import React from "react";
import "./index.scss";
import SocialMediaHooks from "./SocialMediaHooks";
import { Box, Typography } from "@mui/material";
import TextInput from "../../components/TextInput";

function SocialMediaPage() {
  const { navigate, handleSubmit, handleInputChange, data } =
    SocialMediaHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Social Media{" "}
        </Typography>
        <TextInput
          label={"Facebook"}
          isRequire
          id={"facebook"}
          handleChanges={handleInputChange}
          value={data?.facebook}
        />
        <TextInput
          label={"Twiter"}
          isRequire
          id={"twiter"}
          handleChanges={handleInputChange}
          value={data?.twiter}
        />
        <TextInput
          label={"Instagram"}
          isRequire
          id={"instagram"}
          handleChanges={handleInputChange}
          value={data?.instagram}
        />
        <TextInput
          label={"Linkedin"}
          isRequire
          id={"linkedin"}
          handleChanges={handleInputChange}
          value={data?.linkedin}
        />
        <TextInput
          label={"Youtube"}
          isRequire
          id={"youtube"}
          handleChanges={handleInputChange}
          value={data?.youtube}
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
export default SocialMediaPage;
