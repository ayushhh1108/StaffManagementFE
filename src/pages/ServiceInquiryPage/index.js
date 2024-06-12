import React from "react";
import "./index.scss";
import ServiceInquiryHook from "./ServiceInquiryHook";
import { Box, Container, Typography } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import { loaderFunc } from "../../utils/helper";
import DeleteDialog from "../../components/DeleteDialog";

function ServiceInquiryPage() {
  const { tableData, open, setOpen, handleConfirmDelete } =
    ServiceInquiryHook();

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
        {loaderFunc(
          tableData,
          <EnhancedTable
            cellData={HeaderData}
            // isActionCol
            rowItems={[
              "no",
              "name",
              "email",
              "phone",
              "budget",
              "message",
              "photo",
              "status",
              "action",
            ]}
            rowData={tableData?.map((item, index) => ({
              ...item,
              no: 1 + index,
            }))}
          />
        )}
      </Container>
      {DeleteDialog(open, setOpen, handleConfirmDelete)}
    </Box>
  );
}
export default ServiceInquiryPage;
