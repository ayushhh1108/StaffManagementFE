import React, { useState } from "react";
import "./index.scss";
import DealingItemHook from "./DealingItemHook";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";

function DealingItemPage() {
  const { navigate } = DealingItemHook();

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
          Add Dealing Item
        </button>
        <EnhancedTable
          cellData={HeaderData}
          isActionCol
          rowItems={["no", "title", "description", "status"]}
          rowData={TableData?.map((item, index) => ({ ...item, no: 1 + index }))}
        />
      </Container>
    </Box>
  );
}
export default DealingItemPage;
