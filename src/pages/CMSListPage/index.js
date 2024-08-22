import React from "react";
import "./index.scss";
import CMSListHook from "./CMSListHook";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

function CMSListPage() {
  const { navigate, handleSubCMS } = CMSListHook();

  const Actions = ({ row }) => {
    return (
      <div>
        <a
          // onClick={() => handleEditClick && handleEditClick(row)}
          className="font-medium text-[#164e63] hover:underline"
        >
          Edit
        </a>
        <a
          // onClick={() => handleDeleteClick && handleDeleteClick(row)}
          className="font-medium text-[#c70000] hover:underline ml-4"
        >
          Delete
        </a>
        <a
          onClick={() => handleSubCMS(row)}
          className="font-medium text-[#164e63] hover:underline ml-4"
        >
          SubCMS
        </a>
      </div>
    );
  };

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container text-left">
        <button
          type="button"
          onClick={() => navigate("/add-cms")}
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3"
        >
          Add CMS
        </button>
        <EnhancedTable
          cellData={HeaderData}
          // isActionCol
          rowItems={["no", "name", "isDisable", "action"]}
          rowData={TableData?.map((item, index) => ({
            ...item,
            action: <Actions row={item} />,
            no: 1 + index,
          }))}
        />
      </Container>
    </Box>
  );
}
export default CMSListPage;
