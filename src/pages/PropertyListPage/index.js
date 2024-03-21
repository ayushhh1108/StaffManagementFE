import React from "react";
import "./index.scss";
import PropertyListHook from "./PropertyListHook";
import { Box } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";

function PropertyListPage() {
  const { navigate } = PropertyListHook();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8, textAlign: "left" }}
    >
      <button
        type="button"
        onClick={() => navigate("/add-property")}
        className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 my-3"
      >
        Add Property
      </button>
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
