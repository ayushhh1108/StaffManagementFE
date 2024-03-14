import React, { useState } from "react";
import "./index.scss";
import ServiceHook from "./ServiceHook";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";

function ServicePage() {
  const { navigate } = ServiceHook();
  const [headerData, setHeaderData] = useState([
    {
      id: "no",
      numeric: true,
      label: "SR NO",
    },
    {
      id: "title",
      numeric: true,
      label: "TITLE",
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
      title: "ABC",
      description: "description",
      status: "description",
      _id: "111",
    },
    {
      title: "dd",
      description: "eeee",
      status: "eeee",
      _id: "987",
    },
    {
      title: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "222",
    },
    {
      title: "Foo",
      description: "bar",
      status: "baz",
      _id: "333",
    },
    {
      title: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "444",
    },
    {
      title: "Foo",
      description: "bar",
      status: "baz",
      _id: "555",
    },
    {
      title: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "666",
    },
    {
      title: "Foo",
      description: "bar",
      status: "baz",
      _id: "777",
    },
    {
      title: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "888",
    },
    {
      title: "Foo",
      description: "bar",
      status: "baz",
      _id: "999",
    },
    {
      title: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "101010",
    },
    {
      title: "Foo",
      description: "bar",
      status: "baz",
      _id: "111111",
    },
    {
      title: "Lorem",
      description: "ipsum",
      status: "dolor",
      _id: "121212",
    },
    {
      title: "Foo",
      description: "bar",
      status: "baz",
      _id: "131313",
    },
    {
      title: "Lorem",
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
      <Container className="pt-[60px] menu-list-container text-left">
        <button
          type="button"
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3"
        >
          Add Service
        </button>
        <EnhancedTable
          cellData={headerData}
          isActionCol
          rowItems={["no", "title", "description", "status"]}
          rowData={allData?.map((item, index) => ({ ...item, no: 1 + index }))}
        />
      </Container>
    </Box>
  );
}
export default ServicePage;
