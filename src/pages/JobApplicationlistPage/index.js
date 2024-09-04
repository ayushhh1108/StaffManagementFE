import React from "react";
import "./index.scss";
import JobApplicationlistHook from "./JobApplicationlistHook";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import CloseIcon from "@mui/icons-material/Close";
import { loaderFunc } from "../../utils/helper";

function JobApplicationlistPage() {
  const { tableData, view, setView } = JobApplicationlistHook();
  console.log("view", view);
  const DetailedDialog = () => {
    return (
      <Dialog
        fullScreen
        open={view}
        onClose={() => {
          setView(null);
        }}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => {
                setView(null);
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Job Applications
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={() => {
                setView(null);
              }}
            >
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List>
      </Dialog>
    );
  };

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Typography variant="h5" className="mb-5 form-label text-left">
        Job Applications List{" "}
      </Typography>
      {console.log("resume:", tableData)}
      {loaderFunc(
        tableData,
        <EnhancedTable
          cellData={HeaderData}
          isActionCol={false}
          rowItems={[
            "no",
            "job_name",
            "first_name",
            "last_name",
            "mobile",
            "qualification",
            "message",
            "resume",
            "status",
            "action",
          ]}
          rowData={tableData?.map((item, index) => ({
            ...item,
            no: 1 + index,
          }))}
        />
      )}
      <DetailedDialog />
    </Box>
  );
}
export default JobApplicationlistPage;
