import React from "react";
import "./index.scss";
import PropertyListHook from "./PropertyListHook";
import { Box } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";

function PropertyListPage() {
  const { navigate, allProperty } = PropertyListHook();

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
      {allProperty?.length ? <EnhancedTable
        cellData={HeaderData}
        isActionCol
        rowItems={[
          "no",
          "propertyTitle",
          "pType",
          "pCity",
          "for",
          "iAm",
          "status",
          "option",
        ]}
        rowData={allProperty?.map((item, index) => ({
          ...item,
          no: 1 + index,
        }))}
      /> : null}
    </Box>
  );
}
export default PropertyListPage;
