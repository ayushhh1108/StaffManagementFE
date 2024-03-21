import React from "react";
import "./index.scss";
import AddCareerPageHooks from "./AddCareerPageHooks";
import { Box, Typography } from "@mui/material";
import TextInput from "../../components/TextInput";

function AddCareerPage() {
  const { navigate, handleSubmit, handleInputChange, data } =
    AddCareerPageHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Career{" "}
        </Typography>
        <TextInput
          label={"Degination"}
          isRequire
          id={"degination"}
          handleChanges={handleInputChange}
          value={data?.degination}
        />
        <TextInput
          label={"Department"}
          isRequire
          id={"department"}
          handleChanges={handleInputChange}
          value={data?.department}
        />
        <TextInput
          label={"Experience"}
          isRequire
          id={"experience"}
          handleChanges={handleInputChange}
          value={data?.experience}
        />
        <TextInput
          label={"Location"}
          isRequire
          id={"location"}
          handleChanges={handleInputChange}
          value={data?.location}
        />
        <TextInput
          label={"No Of Vacancy"}
          isRequire
          id={"no_vacancy"}
          handleChanges={handleInputChange}
          value={data?.no_vacancy}
        />
        <TextInput
          label={"Description"}
          isRequire
          id={"description"}
          handleChanges={handleInputChange}
          value={data?.description}
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
export default AddCareerPage;
