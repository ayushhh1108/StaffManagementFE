import React, { useState } from "react";
import "./index.scss";
import PropertyListHook from "./PropertyListHook";
import { Box, Container, Typography } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";

function PropertyListPage() {
  const { navigate } = PropertyListHook();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Typography variant="h5" className="mb-5 form-label text-left">
        Job Applications List{" "}
      </Typography>
      <EnhancedTable
        cellData={HeaderData}
        isActionCol
        rowItems={[
          "no",
          "property_name",
          "property_type",
          "city",
          "for",
          "posting_as",
          "status",
          "option",
        ]}
        rowData={TableData?.map((item, index) => ({
          ...item,
          no: 1 + index,
        }))}
      />
    </Box>
  );
}
export default PropertyListPage;
