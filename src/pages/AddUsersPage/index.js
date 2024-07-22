import React from "react";
import "./index.scss";
import AddUsersPageHooks from "./AddUsersPageHooks";
import { Box, Typography } from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

function AddUserPage() {
  const { navigate, handleSubmit, handleInputChange, data, error, roleData } =
    AddUsersPageHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add User{" "}
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
          label={"Mobile"}
          isRequire
          id={"mobile"}
          handleChanges={handleInputChange}
          value={data?.mobile}
          isNumber
          isError={error?.mobile}
        />
        <SelectInput
          label={"Role"}
          isRequire
          id={"userRole"}
          handleChange={handleInputChange}
          value={data?.userRole}
          isError={error?.userRole}
          options={roleData}
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
export default AddUserPage;
