import React, { useState } from "react";
import "./index.scss";
import BookingsPageHook from "./BookingsPageHook";
import { Box, Container, Typography } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import { loaderFunc } from "../../utils/helper";
import DeleteDialog from "../../components/DeleteDialog";

function BookingsPage() {
  const { tableData, open, setOpen, handleConfirmDelete } = BookingsPageHook();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container text-left">
        <Typography variant="h5" className="mb-5 form-label text-left">
          Bookings List{" "}
        </Typography>
        {loaderFunc(
          tableData,
          <EnhancedTable
            cellData={HeaderData}
            isActionCol={false}
            rowItems={[
              "no",
              "property_name",
              "name",
              "email",
              "mobile",
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
export default BookingsPage;
