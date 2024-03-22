import React from "react";
import "./index.scss";
import DirectorHooks from "./DirectorHooks";
import { Box } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";

function DirectorPage() {
  const { navigate } = DirectorHooks();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <div className="pt-[60px] menu-list-container text-left">
        <button
          type="button"
          onClick={()=>navigate("/add-director")}
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3"
        >
          Add Director
        </button>
        <EnhancedTable
          cellData={HeaderData}
          isActionCol
          rowItems={[
            "no",
            "name",
            "degination",
            "description",
            "facebook",
            "instagram",
            "twitter",
            "linkedin",
            "status",
          ]}
          rowData={TableData?.map((item, index) => ({ ...item, no: 1 + index }))}
        />
      </div>
    </Box>
  );
}
export default DirectorPage;
