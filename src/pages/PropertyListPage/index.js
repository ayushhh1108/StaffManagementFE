import React, { useCallback } from "react";
import * as XLSX from "xlsx";
import "./index.scss";
import PropertyListHook from "./PropertyListHook";
import { Box } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import DeleteDialog from "../../components/DeleteDialog";
import { loaderFunc } from "../../utils/helper";

function PropertyListPage() {
  const {
    navigate,
    allProperty,
    handleDelete,
    handleEdit,
    handleConfirmDelete,
    setOpen,
    open,
  } = PropertyListHook();

  const exportToExcel = useCallback(() => {
    const dataToExport = allProperty.map((item, index) => ({
      No: index + 1,
      PropertyTitle: item.propertyTitle,
      PropertyType: item.pType,
      PropertyCity: item.pCity,
      FOR: item.for,
      PostingAs: item.iAm,
      Status: item.status,
    }));
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Properties");
    XLSX.writeFile(workbook, "PropertiesList.xlsx");
  }, [allProperty]);

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8, textAlign: "left" }}
    >
      <button
        type="button"
        onClick={() => navigate("/add-property")}
        className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 my-3"
      >
        Add Property
      </button>
      <button
        type="button"
        onClick={exportToExcel}
        className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 my-3 ml-3"
      >
        Export to Excel
      </button>
      {loaderFunc(
        allProperty,
        <EnhancedTable
          cellData={HeaderData}
          isActionCol
          rowItems={[
            "no",
            "propertyTitle",
            "pType",
            "pCity",
            "for",
            "iAm",
            "status",
          ]}
          rowData={allProperty}
          handleEditClick={handleEdit}
          handleDeleteClick={handleDelete}
        />
      )}
      {DeleteDialog(open, setOpen, handleConfirmDelete)}
    </Box>
  );
}
export default PropertyListPage;
