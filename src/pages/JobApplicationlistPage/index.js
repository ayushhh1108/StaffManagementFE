import React, { useState } from "react";
import "./index.scss";
import JobApplicationlistHook from "./JobApplicationlistHook";
import { Box, Container, Typography } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";
import { loaderFunc } from "../../utils/helper";

function JobApplicationlistPage() {
  const { navigate, tableData } = JobApplicationlistHook();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Typography variant="h5" className="mb-5 form-label text-left">
        Job Applications List{" "}
      </Typography>
      {console.log("resume:", tableData)}
      {loaderFunc(
        tableData,
        <EnhancedTable
          cellData={HeaderData}
          isActionCol={false}
          rowItems={[
            "no",
            "job_name",
            "first_name",
            "last_name",
            "mobile",
            "qualification",
            "message",
            "resume",
            "status",
            "action",
          ]}
          rowData={tableData?.map((item, index) => ({
            ...item,
            no: 1 + index,
          }))}
        />
      )}
    </Box>
  );
}
export default JobApplicationlistPage;
