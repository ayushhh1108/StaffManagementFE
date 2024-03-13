import React, { useState } from "react";
import "./index.scss";
import AboutPageHooks from "./AboutPageHooks";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";

function AboutPage() {
  const { navigate } = AboutPageHooks();
  const [headerData, setHeaderData] = useState([
    {
      id: "no",
      numeric: true,
      label: "SR NO",
    },
    {
      id: "title",
      numeric: false,
      label: "Title",
    },
    {
      id: "metaTitle",
      numeric: false,
      label: "Meta title",
    },
    {
      id: "metaDesc",
      numeric: false,
      label: "Meta Description",
    },
    {
      id: "image_position",
      numeric: false,
      label: "Image Position",
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
      image_position:"left",
      metaTitle: "description",
      metaDesc: "metaDescmetaDesc",
      _id: "111",
    },
    {
      title: "dd",
      image_position:"left",
      metaTitle: "eeee",
      metaDesc: "metaDescmetaDesc",
      _id: "987",
    },
    {
      title: "Lorem",
      image_position:"left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "222",
    },
    {
      title: "Foo",
      image_position:"left",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "333",
    },
    {
      title: "Lorem",
      image_position:"left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "444",
    },
    {
      title: "Foo",
      image_position:"left",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "555",
    },
    {
      title: "Lorem",
      image_position:"left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "666",
    },
    {
      title: "Foo",
      image_position:"left",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "777",
    },
    {
      title: "Lorem",
      image_position:"left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "888",
    },
    {
      title: "Foo",
      image_position:"left",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "999",
    },
    {
      title: "Lorem",
      image_position:"left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "101010",
    },
    {
      title: "Foo",
      image_position:"left",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "111111",
    },
    {
      title: "Lorem",
      image_position:"left",
      metaTitle: "dolor",
      metaDesc: "metaDescmetaDesc",
      _id: "121212",
    },
    {
      title: "Foo",
      image_position:"left",
      metaTitle: "baz",
      metaDesc: "metaDescmetaDesc",
      _id: "131313",
    },
    {
      title: "Lorem",
      image_position:"left",
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
          Add About Page
        </button>
        <EnhancedTable
          cellData={headerData}
          rowItems={["no", "title", "metaTitle", "metaDesc", "image_position"]}
          rowData={allData?.map((item, index) => ({ ...item, no: 1 + index }))}
        />
      </Container>
    </Box>
  );
}
export default AboutPage;
