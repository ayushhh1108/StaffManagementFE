import React from "react";
import "./index.scss";
import BlogPageHook from "./BlogPageHooks";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import { loaderFunc } from "../../utils/helper";

function BlogPage() {
  const { navigate, tableData, handleEdit } = BlogPageHook();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container text-left">
        <button
          type="button"
          onClick={() => navigate("/add-blog")}
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3"
        >
          Add Blog
        </button>
        {console.log("tableData", tableData)}
        {loaderFunc(
          tableData,
          <EnhancedTable
            isActionCol
            cellData={HeaderData}
            rowItems={["no", "title", "description", "metaTitle", "metaDesc"]}
            rowData={tableData?.map((item, index) => ({
              ...item,
              no: 1 + index,
            }))}
            handleEditClick={handleEdit}
          />
        )}
        {/* {!tableData ? (
          <Box
            sx={{
              width: "100%",
              height: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress style={{ color: "#164e63" }} />
          </Box>
        ) : !tableData?.length ? (
          <Typography>NO Data Found</Typography>
        ) : (
          <EnhancedTable
            isActionCol
            cellData={HeaderData}
            rowItems={["no", "title", "description", "metaTitle", "metaDesc"]}
            rowData={tableData?.map((item, index) => ({
              ...item,
              no: 1 + index,
            }))}
          />
        )} */}
      </Container>
    </Box>
  );
}
export default BlogPage;
