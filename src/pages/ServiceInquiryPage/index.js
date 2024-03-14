import React, { useState } from "react";
import "./index.scss";
import ServiceInquiryHook from "./ServiceInquiryHook";
import { Box, Container, Typography } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";

function ServiceInquiryPage() {
  const { navigate } = ServiceInquiryHook();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container text-left">
        <Typography variant="h5" className="mb-5 form-label text-left">
          Service Inquiries List{" "}
        </Typography>
        <EnhancedTable
          cellData={HeaderData}
          isActionCol
          rowItems={[
            "no",
            "name",
            "email",
            "phone",
            "budget",
            "message",
            "photo",
            "status",
          ]}
          rowData={TableData?.map((item, index) => ({
            ...item,
            no: 1 + index,
          }))}
        />
      </Container>
    </Box>
  );
}
export default ServiceInquiryPage;
