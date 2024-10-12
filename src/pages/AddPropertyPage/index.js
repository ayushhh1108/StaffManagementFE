import React from "react";
import "./index.scss";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TextInput from "../../components/TextInput";
import AddPropertyHooks from "./AddPropertyHooks";
import SelectInput from "../../components/SelectInput";

function AddPropertyPage() {
  const { navigate, handleSubmit, handleInputChange, data, error } =
    AddPropertyHooks();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }}>
      <div className="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          ADD PROPERTY
        </Typography>
        <SelectInput
          label={"Responsible for Paying Council Tax"}
          isRequire
          id={"responsibleForPayingCouncilTax"}
          handleChange={handleInputChange}
          value={data?.responsibleForPayingCouncilTax}
          isError={error?.responsibleForPayingCouncilTax}
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
        />
        <SelectInput
          label={"RSL (Type/Group)"}
          isRequire
          id={"rsl"}
          handleChange={handleInputChange}
          value={data?.rsl}
          isError={error?.rsl}
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
        />
        <TextInput
          label={"Address Line 1 "}
          isRequire
          id={"address"}
          handleChanges={handleInputChange}
          value={data?.address}
          isError={error?.address}
        />
        <TextInput
          label={"No of Bedrooms"}
          isRequire
          id={"noOfBedrooms"}
          handleChanges={handleInputChange}
          value={data?.noOfBedrooms}
          isError={error?.noOfBedrooms}
          isNumber={true}
        />
        <TextInput
          label={"Area"}
          isRequire
          id={"area"}
          handleChanges={handleInputChange}
          value={data?.area}
          isError={error?.area}
        />
        <TextInput
          label={"City"}
          isRequire
          id={"city"}
          handleChanges={handleInputChange}
          value={data?.city}
          isError={error?.city}
        />
        <TextInput
          label={"Post Code"}
          isRequire
          id={"postcode"}
          handleChanges={handleInputChange}
          value={data?.postcode}
          isError={error?.postcode}
          isNumber={true}
        />
        <TextInput
          label={"Basic Rent"}
          isRequire
          id={"basicRent"}
          handleChanges={handleInputChange}
          value={data?.basicRent}
          isError={error?.basicRent}
          isNumber={true}
        />
        <TextInput
          label={"Total Service Charges"}
          isRequire
          id={"totalServiceCharge"}
          handleChanges={handleInputChange}
          value={data?.totalServiceCharge}
          isError={error?.totalServiceCharge}
          isNumber={true}
        />
        <TextInput
          label={"Total Eligeble Rent"}
          isRequire
          id={"totalEligebleRent"}
          handleChanges={handleInputChange}
          value={data?.totalEligebleRent}
          isError={error?.totalEligebleRent}
          isNumber={true}
        />
        <TextInput
          label={"Weekly Ineligible Charges"}
          isRequire
          id={"weeklyIneligibleCharge"}
          handleChanges={handleInputChange}
          value={data?.weeklyIneligibleCharge}
          isError={error?.weeklyIneligibleCharge}
          isNumber={true}
        />
        <SelectInput
          label={"Shared With Other?"}
          isRequire
          id={"sharedWithOther"}
          handleChange={handleInputChange}
          value={data?.sharedWithOther}
          isError={error?.sharedWithOther}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <FormControlLabel
          className="flex text-left w-full"
          control={
            <Checkbox
              color="default"
              id="otherInfomation"
              checked={data?.otherInfomation}
              onChange={handleInputChange}
              className="checkboxx"
            />
          }
          label={<span className="checkbox-text">Other Information</span>}
        />
        <SelectInput
          label={"Bedsit"}
          isRequire
          id={"bedsit"}
          handleChange={handleInputChange}
          value={data?.bedsit}
          isError={error?.bedsit}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <SelectInput
          label={"Self Contained Flat"}
          isRequire
          id={"selfContainedFlat"}
          handleChange={handleInputChange}
          value={data?.selfContainedFlat}
          isError={error?.selfContainedFlat}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <TextInput
          label={"Quantity of floors"}
          isRequire
          id={"quantityOfFloors"}
          handleChanges={handleInputChange}
          value={data?.quantityOfFloors}
          isError={error?.quantityOfFloors}
          isNumber={true}
        />
        <SelectInput
          label={"Unfurnished"}
          isRequire
          id={"unfurnished"}
          handleChange={handleInputChange}
          value={data?.unfurnished}
          isError={error?.unfurnished}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <SelectInput
          label={"Part Furnished"}
          isRequire
          id={"partFurnished"}
          handleChange={handleInputChange}
          value={data?.partFurnished}
          isError={error?.partFurnished}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <SelectInput
          label={"Fully Furnished"}
          isRequire
          id={"fullyFurnished"}
          handleChange={handleInputChange}
          value={data?.fullyFurnished}
          isError={error?.fullyFurnished}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <SelectInput
          label={"Central Heating"}
          isRequire
          id={"centralHeating"}
          handleChange={handleInputChange}
          value={data?.centralHeating}
          isError={error?.centralHeating}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <SelectInput
          label={"Garden"}
          isRequire
          id={"garden"}
          handleChange={handleInputChange}
          value={data?.garden}
          isError={error?.garden}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <SelectInput
          label={"Garrage/Parking Space"}
          isRequire
          id={"parkingSpace"}
          handleChange={handleInputChange}
          value={data?.parkingSpace}
          isError={error?.parkingSpace}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <TextInput
          label={"Accommodation Location"}
          isRequire
          id={"accommodationLocation"}
          handleChanges={handleInputChange}
          value={data?.accommodationLocation}
          isError={error?.accommodationLocation}
        />
        <TextInput
          label={"Accommodation Floor"}
          isRequire
          id={"accommodationFloor"}
          handleChanges={handleInputChange}
          value={data?.accommodationFloor}
          isError={error?.accommodationFloor}
        />{" "}
        <div className="couple-input">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {" "}
            Total Living Rooms?
          </label>
          <TextInput
            label={"Your Use"}
            isRequire
            id={"totalLivingRooms"}
            handleChanges={handleInputChange}
            value={data?.totalLivingRooms}
            isError={error?.totalLivingRooms}
            isNumber={true}
          />
          <TextInput
            label={"Communal"}
            isRequire
            id={"communalLiving"}
            handleChanges={handleInputChange}
            value={data?.communalLiving}
            isError={error?.communalLiving}
            isNumber={true}
          />
        </div>
        <div className="couple-input">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {" "}
            Total Bedsit Rooms?
          </label>
          <TextInput
            label={"Your Use"}
            isRequire
            id={"totalBedsitRooms"}
            handleChanges={handleInputChange}
            value={data?.totalBedsitRooms}
            isError={error?.totalBedsitRooms}
            isNumber={true}
          />
          <TextInput
            label={"Communal"}
            isRequire
            id={"communalBedsit"}
            handleChanges={handleInputChange}
            value={data?.communalBedsit}
            isError={error?.communalBedsit}
            isNumber={true}
          />
        </div>
        <div className="couple-input">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {" "}
            Total BedRooms?
          </label>
          <TextInput
            label={"Your Use"}
            isRequire
            id={"totalBedRooms"}
            handleChanges={handleInputChange}
            value={data?.totalBedRooms}
            isError={error?.totalBedRooms}
            isNumber={true}
          />
          <TextInput
            label={"Communal"}
            isRequire
            id={"communalBedRooms"}
            handleChanges={handleInputChange}
            value={data?.communalBedRooms}
            isError={error?.communalBedRooms}
            isNumber={true}
          />
        </div>
        <div className="couple-input">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {" "}
            Total BathRooms?
          </label>
          <TextInput
            label={"Your Use"}
            isRequire
            id={"totalBathRooms"}
            handleChanges={handleInputChange}
            value={data?.totalBathRooms}
            isError={error?.totalBathRooms}
            isNumber={true}
          />
          <TextInput
            label={"Communal"}
            isRequire
            id={"communalBathRooms"}
            handleChanges={handleInputChange}
            value={data?.communalBathRooms}
            isError={error?.communalBathRooms}
            isNumber={true}
          />
        </div>
        <div className="couple-input">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {" "}
            Total Toilets?
          </label>
          <TextInput
            label={"Your Use"}
            isRequire
            id={"totalToilets"}
            handleChanges={handleInputChange}
            value={data?.totalToilets}
            isError={error?.totalToilets}
            isNumber={true}
          />
          <TextInput
            label={"Communal"}
            isRequire
            id={"communalToilets"}
            handleChanges={handleInputChange}
            value={data?.communalToilets}
            isError={error?.communalToilets}
            isNumber={true}
          />
        </div>
        <div className="couple-input">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {" "}
            Total Kitchens?
          </label>
          <TextInput
            label={"Your Use"}
            isRequire
            id={"totalKitchens"}
            handleChanges={handleInputChange}
            value={data?.totalKitchens}
            isError={error?.totalKitchens}
            isNumber={true}
          />
          <TextInput
            label={"Communal"}
            isRequire
            id={"communalKitchens"}
            handleChanges={handleInputChange}
            value={data?.communalKitchens}
            isError={error?.communalKitchens}
            isNumber={true}
          />
        </div>
        <div className="couple-input">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {" "}
            Total Other Rooms?
          </label>
          <TextInput
            label={"Your Use"}
            isRequire
            id={"totalOtherRooms"}
            handleChanges={handleInputChange}
            value={data?.totalOtherRooms}
            isError={error?.totalOtherRooms}
            isNumber={true}
          />
          <TextInput
            label={"Communal"}
            isRequire
            id={"communalOtherRooms"}
            handleChanges={handleInputChange}
            value={data?.communalOtherRooms}
            isError={error?.communalOtherRooms}
            isNumber={true}
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Save
        </button>
        <button
          type="button"
          className="text-white bg-[#b3b4b7] hover:bg-[#818183] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Cancel
        </button>
      </div>
    </Box>
  );
}

export default AddPropertyPage;
