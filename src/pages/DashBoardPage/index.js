import React from "react";
import "./index.scss";
import DashBoardPageHook from "./DashBoardPagePageHooks";
import {
  Badge,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { getLocalStorageData } from "../../utils/auth";

function DashBoardPage() {
  const { navigate, storeData } = DashBoardPageHook();
  const user = getLocalStorageData();
  const documentItems = [
    { name: "Tenancies", count: 46 },
    { name: "Properties", count: 4 },
    { name: "Purchase Orders", count: 18 },
    { name: "Invoices & Bills", count: 35 },
    { name: "Tickets", count: 20 },
  ];

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10 }}>
      <Box color="default" className=" w-full p-4 text-left">
        <Typography style={{ fontSize: "20px", fontWeight: 600 }}>
          Welcome back, {user?.user?.name}
        </Typography>
        <Typography style={{ color: "grey", fontSize: "15px" }}>
          Track your activities here.
        </Typography>
      </Box>
      <div
        class="p-4 d-flex "
        style={{
          width: "60%",
          textAlign: "left",
        }}
      >
        {/* <div
          class="bg-blue-500 dark:bg-gray-800 shadow-lg cursor-pointer rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group "
          style={{ backgroundColor: "#164e63" }}
          onClick={() => navigate("/")}
        >
          <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <div class="text-right">
            <p class="text-2xl">
              {storeData?.propertyReducer?.propertyData?.data?.data?.total ?? 0}
            </p>
            <p>Properties</p>
          </div>
        </div>
        <div
          class="bg-blue-500 dark:bg-gray-800 shadow-lg cursor-pointer rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group "
          style={{ backgroundColor: "#164e63" }}
          onClick={() => navigate("/")}
        >
          <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          </div>
          <div class="text-right">
            <p class="text-2xl">
              {storeData?.enquiryDataReducer?.enquiryData?.total ?? 0}
            </p>
            <p>Inquieries</p>
          </div>
        </div> */}
        <Typography variant="h4" component="h2" gutterBottom>
          Documents
        </Typography>
        <Typography sx={{ color: "red", mb: 3 }}>
          To update your company and staff details, click on the "Edit Full
          Organisation" button.
        </Typography>

        {/* Document List */}
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 3,
          }}
        >
          {documentItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #e0e0e0",
                py: 1,
              }}
            >
              <ListItemText sx={{ width: "auto" }} primary={item.name} />
              <Badge
                badgeContent={item.count}
                color="primary"
                sx={{
                  "& .MuiBadge-badge": { fontSize: "1rem", padding: "0 5px" },
                  marginRight: "10px",
                }}
              />
            </ListItem>
          ))}
        </List>

        {/* Support Ticket Button */}
        <Box sx={{ mt: 3, textAlign: "right" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1e6c89",
              "&:hover": { backgroundColor: "#164e63" },
              textTransform: "none",
            }}
          >
            New Portal Support Ticket
          </Button>
        </Box>
      </div>
    </Box>
  );
}
export default DashBoardPage;
