import React from "react";
import "./index.scss";
import NewsLatterHook from "./NewsLatterHook";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import { loaderFunc } from "../../utils/helper";
import DeleteDialog from "../../components/DeleteDialog";

function NewsLatterPage() {
  const {
    navigate,
    tableData,
    handleDelete,
    open,
    setOpen,
    handleConfirmDelete,
  } = NewsLatterHook();

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
            rowItems={["no", "email", "status", "action"]}
            rowData={tableData?.map((item, index) => ({
              ...item,
              no: 1 + index,
            }))}
            handleDeleteClick={handleDelete}
          />
        )}
      </Container>
      {DeleteDialog(open, setOpen, handleConfirmDelete)}
    </Box>
  );
}
export default NewsLatterPage;
