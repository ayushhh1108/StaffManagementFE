import React, { useState } from "react";
import "./index.scss";
import ContactUsPageHooks from "./ContactUsPageHooks";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";

function ContactUsPage() {
  const { navigate } = ContactUsPageHooks();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container text-left">
        <EnhancedTable
          cellData={HeaderData}
          isActionCol={false}
          rowItems={[
            "no",
            "name",
            "email",
            "phone",
            "subject",
            "message",
            "status",
            "action",
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
export default ContactUsPage;
