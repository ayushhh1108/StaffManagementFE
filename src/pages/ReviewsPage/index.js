import React, { useState } from "react";
import "./index.scss";
import ReviewsPageHook from "./ReviewsPageHook";
import { Box, Container, Typography } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import { loaderFunc } from "../../utils/helper";

function ReviewsPage() {
  const { navigate, tableData } = ReviewsPageHook();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container text-left">
        <Typography variant="h5" className="mb-5 form-label text-left">
          Reviews List{" "}
        </Typography>
        {loaderFunc(
          tableData,
        <EnhancedTable
          cellData={HeaderData}
          isActionCol={false}
          rowItems={[
            "no",
            "name",
            "email",
            "rating",
            "message",
            "status",
            "action",
          ]}
          rowData={tableData}
        />)}
      </Container>
    </Box>
  );
}
export default ReviewsPage;
