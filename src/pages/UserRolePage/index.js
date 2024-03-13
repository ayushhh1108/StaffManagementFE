import React, { useState } from "react";
import "./index.scss";
import UserRolePageHooks from "./UserRolePageHooks";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";

function UserRolePage() {
  const { navigate } = UserRolePageHooks();
  const [headerData, setHeaderData] = useState([
    {
      id: "no",
      numeric: true,
      label: "SR NO",
    },
    {
      id: "name",
      numeric: false,
      label: "Name",
    },
    {
      id: "status",
      numeric: false,
      label: "Status",
    },
    {
      id: "action",
      numeric: true,
      label: "ACTION",
    },
  ]);
  const allData = [
    {
      name: "ABC",
      status:"left",
      _id: "111",
    },
    {
      name: "dd",
      status:"left",
      _id: "987",
    },
    {
      name: "Lorem",
      status:"left",
      _id: "222",
    },
    {
      name: "Foo",
      status:"left",
      _id: "333",
    },
    {
      name: "Lorem",
      status:"left",
      _id: "444",
    },
    {
      name: "Foo",
      status:"left",
      _id: "555",
    },
    {
      name: "Lorem",
      status:"left",
      _id: "666",
    },
    {
      name: "Foo",
      status:"left",
      _id: "777",
    },
    {
      name: "Lorem",
      status:"left",
      _id: "888",
    },
    {
      name: "Foo",
      status:"left",
      _id: "999",
    },
    {
      name: "Lorem",
      status:"left",
      _id: "101010",
    },
    {
      name: "Foo",
      status:"left",
      _id: "111111",
    },
    {
      name: "Lorem",
      status:"left",
      _id: "121212",
    },
    {
      name: "Foo",
      status:"left",
      _id: "131313",
    },
    {
      name: "Lorem",
      status:"left",
      _id: "141414",
    },
  ];

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container text-left">
        <button
          type="button"
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3"
        >
          Add User Role
        </button>
        <EnhancedTable
          cellData={headerData}
          rowItems={["no", "name", "status"]}
          rowData={allData?.map((item, index) => ({ ...item, no: 1 + index }))}
        />
      </Container>
    </Box>
  );
}
export default UserRolePage;
