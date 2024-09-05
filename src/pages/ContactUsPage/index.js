import React, { useState } from "react";
import "./index.scss";
import ContactUsPageHooks from "./ContactUsPageHooks";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import { loaderFunc } from "../../utils/helper";
import DeleteDialog from "../../components/DeleteDialog";

function ContactUsPage() {
  const {
    tableData,
    open,
    setOpen,
    handleConfirmDelete,
  } = ContactUsPageHooks();
  console.log("hello", tableData);
  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container text-left">
        {loaderFunc(
          tableData,
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
            rowData={tableData}
          />
        )}
      </Container>
      {DeleteDialog(open, setOpen, handleConfirmDelete)}
    </Box>
  );
}
export default ContactUsPage;
