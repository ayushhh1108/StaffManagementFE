import React, { useState } from "react";
import "./index.scss";
import UsersPageHooks from "./UsersPageHooks";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";

function UsersPage() {
  const { navigate } = UsersPageHooks();
  const [headerData, setHeaderData] = useState([
    {
      id: "no",
      numeric: true,
      label: "SR NO",
    },
    {
      id: "first_name",
      numeric: false,
      label: "First name",
    },
    {
      id: "last_name",
      numeric: false,
      label: "Last name",
    },
    {
      id: "email",
      numeric: false,
      label: "E-mail",
    },
    {
      id: "mobile",
      numeric: false,
      label: "Mobile",
    },
    {
      id: "role",
      numeric: false,
      label: "Role",
    },
    {
      id: "action",
      numeric: true,
      label: "ACTION",
    },
  ]);
  const allData = [
    {
      first_name: "ABC",
      last_name: "left",
      email: "description",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "111",
    },
    {
      first_name: "dd",
      last_name: "left",
      email: "eeee",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "987",
    },
    {
      first_name: "Lorem",
      last_name: "left",
      email: "dolor",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "222",
    },
    {
      first_name: "Foo",
      last_name: "left",
      email: "baz",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "333",
    },
    {
      first_name: "Lorem",
      last_name: "left",
      email: "dolor",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "444",
    },
    {
      first_name: "Foo",
      last_name: "left",
      email: "baz",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "555",
    },
    {
      first_name: "Lorem",
      last_name: "left",
      email: "dolor",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "666",
    },
    {
      first_name: "Foo",
      last_name: "left",
      email: "baz",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "777",
    },
    {
      first_name: "Lorem",
      last_name: "left",
      email: "dolor",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "888",
    },
    {
      first_name: "Foo",
      last_name: "left",
      email: "baz",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "999",
    },
    {
      first_name: "Lorem",
      last_name: "left",
      email: "dolor",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "101010",
    },
    {
      first_name: "Foo",
      last_name: "left",
      email: "baz",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "111111",
    },
    {
      first_name: "Lorem",
      last_name: "left",
      email: "dolor",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "121212",
    },
    {
      first_name: "Foo",
      last_name: "left",
      email: "baz",
      mobile: "metaDescmetaDesc",
      role: "employee",
      _id: "131313",
    },
    {
      first_name: "Lorem",
      last_name: "left",
      email: "dolor",
      mobile: "metaDescmetaDesc",
      role: "employee",
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
          Add User
        </button>
        <EnhancedTable
          cellData={headerData}
          rowItems={[
            "no",
            "first_name",
            "last_name",
            "email",
            "mobile",
            "role",
          ]}
          rowData={allData?.map((item, index) => ({ ...item, no: 1 + index }))}
        />
      </Container>
    </Box>
  );
}
export default UsersPage;
