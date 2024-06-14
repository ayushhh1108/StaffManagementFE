import React from "react";
import "./index.scss";
import TeamsHooks from "./TeamsHooks";
import { Box } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import { loaderFunc } from "../../utils/helper";
import DeleteDialog from "../../components/DeleteDialog";

function TeamsPage() {
  const {
    navigate,
    tableData,
    handleEdit,
    handleDelete,
    open,
    setOpen,
    handleConfirmDelete,
  } = TeamsHooks();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <div className="pt-[60px] menu-list-container text-left">
        <button
          type="button"
          onClick={() => navigate("/add-team")}
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3"
        >
          Add Team Member
        </button>
        {console.log("tableData", tableData)}
        {loaderFunc(
          tableData,
          <EnhancedTable
            cellData={HeaderData}
            isActionCol
            rowItems={[
              "no",
              "name",
              "designation",
              "description",
              "facebook",
              "instagram",
              "twitter",
              "linkedin",
              "status",
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
export default TeamsPage;
