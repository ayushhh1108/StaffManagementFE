import React, { useState } from "react";
import "./index.scss";
import BookingsPageHook from "./BookingsPageHook";
import { Box, Container, Typography } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";

function BookingsPage() {
  const { navigate } = BookingsPageHook();

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
        <EnhancedTable
          cellData={HeaderData}
          isActionCol={false}
          rowItems={[
            "no",
            "property_name",
            "name",
            "email",
            "phone",
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
export default BookingsPage;
