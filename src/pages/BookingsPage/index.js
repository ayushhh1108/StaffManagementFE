import React, { useCallback, useState } from "react";
import * as XLSX from "xlsx";
import "./index.scss";
import BookingsPageHook from "./BookingsPageHook";
import { Box, Container, Typography } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import { loaderFunc } from "../../utils/helper";
import DeleteDialog from "../../components/DeleteDialog";

function BookingsPage() {
  const { tableData, open, setOpen, handleConfirmDelete } = BookingsPageHook();

  const exportToExcel = useCallback(() => {
    const dataToExport = tableData.map((item, index) => ({
      No: index + 1,
      PropertyName: item.property_name,
      Name: item.name,
      Email: item.email,
      Mobile: item.mobile,
      Status: item.status,
    }));
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");
    XLSX.writeFile(workbook, "BookingList.xlsx");
  }, [tableData]);

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
        <button
          type="button"
          onClick={exportToExcel}
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 my-3 ml-3"
        >
          Export to Excel
        </button>
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
