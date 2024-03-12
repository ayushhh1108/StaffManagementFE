import React, { useState } from "react";
import "./index.scss";
import SliderPageHook from "./SliderPageHooks";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";

function SliderPage() {
  const { navigate } = SliderPageHook();
  const [headerData, setHeaderData] = useState([
    {
      id: "no",
      numeric: true,
      label: "SR NO",
    },
    {
      id: "Name",
      numeric: false,
      label: "Name",
    },
    {
      id: "description",
      numeric: false,
      label: "DESCRIPTION",
    },
    {
      id: "metaTitle",
      numeric: false,
      label: "Meta title",
    },
    {
      id: "metaDesc",
      numeric: false,
      label: "Meta Discription",
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
      metaTitle: "description",
      metaDesc: "metaDescmetaDesc",
      _id: "111",
    },
    {
      name: "dd",
      description: "eeee",
      metaTitle: "eeee",
      metaDesc: "metaDescmetaDesc",
      _id: "987",
    },
    {
      name: "Lorem",
      description: "ipsum",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "222",
    },
    {
      name: "Foo",
      description: "bar",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "333",
    },
    {
      name: "Lorem",
      description: "ipsum",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "444",
    },
    {
      name: "Foo",
      description: "bar",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "555",
    },
    {
      name: "Lorem",
      description: "ipsum",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "666",
    },
    {
      name: "Foo",
      description: "bar",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "777",
    },
    {
      name: "Lorem",
      description: "ipsum",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "888",
    },
    {
      name: "Foo",
      description: "bar",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "999",
    },
    {
      name: "Lorem",
      description: "ipsum",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "101010",
    },
    {
      name: "Foo",
      description: "bar",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "111111",
    },
    {
      name: "Lorem",
      description: "ipsum",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "121212",
    },
    {
      name: "Foo",
      description: "bar",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "131313",
    },
    {
      name: "Lorem",
      description: "ipsum",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
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
          Add Slider
        </button>
        <EnhancedTable
          cellData={headerData}
          rowItems={["no", "name", "description", "metaTitle", "metaDesc"]}
          rowData={allData?.map((item, index) => ({ ...item, no: 1 + index }))}
        />
      </Container>
    </Box>
  );
}
export default SliderPage;
