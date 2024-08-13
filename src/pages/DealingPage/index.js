import React from "react";
import "./index.scss";
import DealingHook from "./DealingHook";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import { loaderFunc } from "../../utils/helper";
import DeleteDialog from "../../components/DeleteDialog";

function DealingPage() {
  const {
    navigate,
    tableData,
    handleEdit,
    handleDelete,
    open,
    setOpen,
    handleConfirmDelete,
  } = DealingHook();
  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container text-left">
        <button
          type="button"
          onClick={() => navigate("/add-dealing")}
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3"
        >
          Add Dealing
        </button>
        {loaderFunc(
          tableData,
          <EnhancedTable
            cellData={HeaderData}
            isActionCol
            rowItems={["no", "title", "description", "status"]}
            rowData={tableData}
            handleEditClick={handleEdit}
            handleDeleteClick={handleDelete}
          />
        )}
      </Container>
      {DeleteDialog(open, setOpen, handleConfirmDelete)}
    </Box>
  );
}
export default DealingPage;
