import React from "react";
import "./index.scss";
import AddCareerPageHooks from "./AddCareerPageHooks";
import { Box, Typography } from "@mui/material";
import TextInput from "../../components/TextInput";

function AddCareerPage() {
  const { handleSubmit, handleInputChange, data, error } = AddCareerPageHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Career{" "}
        </Typography>
        <TextInput
          label={"Designation"}
          isRequire
          id={"designation"}
          handleChanges={handleInputChange}
          value={data?.designation}
          isError={error?.designation}
        />
        <TextInput
          label={"Department"}
          isRequire
          id={"department"}
          handleChanges={handleInputChange}
          value={data?.department}
          isError={error?.department}
        />
        <TextInput
          label={"Experience"}
          isRequire
          id={"experience"}
          handleChanges={handleInputChange}
          value={data?.experience}
          isError={error?.experience}
        />
        <TextInput
          label={"Location"}
          isRequire
          id={"location"}
          handleChanges={handleInputChange}
          value={data?.location}
          isError={error?.location}
        />
        <TextInput
          label={"No Of Vacancy"}
          isRequire
          id={"vacancy"}
          handleChanges={handleInputChange}
          value={data?.vacancy}
          isError={error?.vacancy}
          isNumber={true}
        />
        <TextInput
          label={"Description"}
          isRequire
          id={"description"}
          handleChanges={handleInputChange}
          value={data?.description}
          isError={error?.description}
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
