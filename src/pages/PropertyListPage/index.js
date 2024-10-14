import React, { useState } from "react";
import "./index.scss";
import { Box, Container, TextField } from "@mui/material";
import EnhancedTable from "../../components/Table";
import { HeaderData } from "./constant";
import { loaderFunc } from "../../utils/helper";
import DeleteDialog from "../../components/DeleteDialog";
import TextInput from "../../components/TextInput";
import PropertyListHook from "./PropertyListPageHook";

function PropertyListPage() {
  const {
    navigate,
    tableData,
    handleDelete,
    open,
    setOpen,
    handleConfirmDelete,
    handleEdit,
    searchQuery,
    setSearchQuery,
  } = PropertyListHook();

  return (
    <Box
      className="menu-list-page"
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8 }}
    >
      <Container className="pt-[60px] menu-list-container text-left">
        <button
          type="button"
          onClick={() => navigate("/add-property")}
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3"
        >
          Add PROPERTY
        </button>
        <TextInput
          label={"Search Property"}
          id={"SearchProperty"}
          handleChanges={(e, val) => setSearchQuery(val)}
          value={searchQuery}
        />
        {loaderFunc(
          tableData,
          <EnhancedTable
            cellData={HeaderData}
            isActionCol
            rowItems={[
              "no",
              "responsibleForPayingCouncilTax",
              "rsl",
              "address",
              "noOfBedrooms",
              "area",
              "city",
              "postcode",
              "basicRent",
              "totalServiceCharge",
              "totalEligebleRent",
              "weeklyIneligibleCharge",
              "sharedWithOther",
              "bedsit",
              "selfContainedFlat",
              "quantityOfFloors",
              "unfurnished",
              "partFurnished",
              "fullyFurnished",
              "centralHeating",
              "garden",
              "parkingSpace",
              "accommodationLocation",
              "accommodationFloor",
              "totalLivingRooms",
              "communalLiving",
              "totalBedsitRooms",
              "communalBedsit",
              "totalBedRooms",
              "communalBedRooms",
              "totalBathRooms",
              "communalBathRooms",
              "totalToilets",
              "communalToilets",
              "totalKitchens",
              "communalKitchens",
              "totalOtherRooms",
              "communalOtherRooms",
              "addedBy",
              "type",
              "createdAt",
            ]}
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
export default PropertyListPage;
