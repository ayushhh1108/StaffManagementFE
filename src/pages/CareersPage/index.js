import React from "react";
import "./index.scss";
import CareersPageHooks from "./CareersPageHooks";
import { Box } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import { loaderFunc } from "../../utils/helper";
import DeleteDialog from "../../components/DeleteDialog";

function CareersPage() {
  const {
    navigate,
    tableData,
    handleEdit,
    handleDelete,
    open,
    setOpen,
    handleConfirmDelete,
  } = CareersPageHooks();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <div className="pt-[60px] menu-list-container text-left">
        <button
          type="button"
          onClick={() => navigate("/add-career")}
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3"
        >
          Add Career
        </button>
        {console.log(tableData, "vtableData")}
        {loaderFunc(
          tableData,
          <EnhancedTable
            cellData={HeaderData}
            isActionCol
            rowItems={[
              "no",
              "designation",
              "department",
              "description",
              "experience",
              "location",
              "vacancy",
              "active",
            ]}
            rowData={tableData?.map((item, index) => ({
              ...item,
              no: 1 + index,
            }))}
            handleEditClick={handleEdit}
            handleDeleteClick={handleDelete}
          />
        )}
      </div>
      {DeleteDialog(open, setOpen, handleConfirmDelete)}
    </Box>
  );
}
export default CareersPage;
