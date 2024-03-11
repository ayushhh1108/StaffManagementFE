import React, { useState } from "react";
import "./index.scss";
import MenuPageHook from "./MenuPageHooks";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";

function MenuPage() {
  const { navigate } = MenuPageHook();
  const [headerData, setHeaderData] = useState([
    {
      id: "no",
      numeric: true,
      label: "SR NO",
    },
    {
      id: "name",
      numeric: true,
      label: "NAME",
    },
    {
      id: "description",
      numeric: true,
      label: "DESCRIPTION",
    },
    {
      id: "status",
      numeric: true,
      label: "STATUS",
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
      description: "description",
      status: "description",
      _id: "111",
    },
    {
      name: "dd",
      description: "eeee",
      status: "eeee",
      _id: "987",
    },
    {
      name: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "222",
    },
    {
      name: "Foo",
      description: "bar",
      status: "baz",
      _id: "333",
    },
    {
      name: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "444",
    },
    {
      name: "Foo",
      description: "bar",
      status: "baz",
      _id: "555",
    },
    {
      name: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "666",
    },
    {
      name: "Foo",
      description: "bar",
      status: "baz",
      _id: "777",
    },
    {
      name: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "888",
    },
    {
      name: "Foo",
      description: "bar",
      status: "baz",
      _id: "999",
    },
    {
      name: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "101010",
    },
    {
      name: "Foo",
      description: "bar",
      status: "baz",
      _id: "111111",
    },
    {
      name: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "121212",
    },
    {
      name: "Foo",
      description: "bar",
      status: "baz",
      _id: "131313",
    },
    {
      name: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "141414",
    },
  ];

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container">
        <EnhancedTable
          cellData={headerData}
          rowData={allData?.map((item, index) => ({ ...item, no: 1 + index }))}
        />
      </Container>
    </Box>
  );
}
export default MenuPage;
