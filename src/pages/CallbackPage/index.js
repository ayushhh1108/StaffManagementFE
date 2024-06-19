import React from "react";
import "./index.scss";
import CallbackListPageHook from "./CallbackListPageHooks";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";
import { loaderFunc } from "../../utils/helper";

function CallbackListPage() {
  const { tableData } = CallbackListPageHook();

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
            rowItems={[
              "no",
              "name",
              "email",
              "phone",
              "message",
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
    </Box>
  );
}
export default CallbackListPage;
