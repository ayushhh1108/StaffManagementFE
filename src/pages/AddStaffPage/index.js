import React from "react";
import "./index.scss";
import AddStaffHooks from "./AddStaffHooks";
import { Box, Typography } from "@mui/material";
import TextInput from "../../components/TextInput";

function AddStaffPage() {
  const { navigate, handleSubmit, handleInputChange, data, error } =
    AddStaffHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          ADD STAFF
        </Typography>
        <TextInput
          label={"Job Title"}
          isRequire
          id={"jobTitle"}
          handleChanges={handleInputChange}
          value={data?.jobTitle}
          isError={error?.jobTitle}
        />
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
          label={"Email"}
          isRequire
          id={"email"}
          handleChanges={handleInputChange}
          value={data?.email}
          isError={error?.email}
        />
        <TextInput
          label={"Password"}
          isRequire
          id={"password"}
          handleChanges={handleInputChange}
          value={data?.password}
          isError={error?.password}
        />
        <TextInput
          label={"Phone Number"}
          isRequire
          id={"phoneNumber"}
          handleChanges={handleInputChange}
          value={data?.phoneNumber}
          isError={error?.phoneNumber}
        />
        {data?.companyName && (
          <TextInput
            label={"Company Name"}
            isRequire
            id={"companyName"}
            handleChanges={handleInputChange}
            value={data?.companyName}
            isError={error?.companyName}
            disabled={true}
          />
        )}
        <TextInput
          label={"Gender"}
          isRequire
          id={"gender"}
          handleChanges={handleInputChange}
          value={data?.gender}
          isError={error?.gender}
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
          Cancel
        </button>
      </div>
    </Box>
  );
}

export default AddStaffPage;
