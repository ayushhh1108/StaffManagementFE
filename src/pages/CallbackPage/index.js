import React from "react";
import "./index.scss";
import CallbackListPageHook from "./CallbackListPageHooks";
import { Box, Container } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData, TableData } from "./constant";

function CallbackListPage() {
  const { navigate } = CallbackListPageHook();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container text-left">
        <EnhancedTable
          cellData={HeaderData}
          isActionCol={false}
          rowItems={[
            "no",
            "name",
            "email",
            "phone",
            "place",
            "status",
            "action",
          ]}
          rowData={TableData?.map((item, index) => ({
            ...item,
            no: 1 + index,
          }))}
        />
      </Container>
    </Box>
  );
}
export default CallbackListPage;
