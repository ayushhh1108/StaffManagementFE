import React, { useState } from "react";
import "./index.scss";
import JobApplicationlistHook from "./JobApplicationlistHook";
import { Box, Container, Typography } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";

function JobApplicationlistPage() {
  const { navigate } = JobApplicationlistHook();

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
        rowData={TableData?.map((item, index) => ({
          ...item,
          no: 1 + index,
        }))}
      />
    </Box>
  );
}
export default JobApplicationlistPage;
