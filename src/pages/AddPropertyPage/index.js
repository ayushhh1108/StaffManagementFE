import React, { useState } from "react";
import "./index.scss";

import AddPropertyPageHooks from "./AddPropertyPageHooks";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import Dropzone from "../../components/DropZone";
import TextInput from "../../components/TextInput";
import SelectPlaceholder from "../../components/SelectPlaceholder";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function AddPropertyPage() {
  const {
    navigate,
    onTypeChange,
    clientData,
    handleSelectChange,
    propertyType,
    totalFlatCount,
    otherSelects,
    handleRadioChange,
    radioButtonData,
    isMobileScreen
  } = AddPropertyPageHooks();

  const CommercialPlaces = [
    "Commercial Office Space",
    "Commercial Shop",
    "Commercial Showroom",
    "Commercial Land",
    "Warehouse/ Godown",
    "Industrial Shed",
  ];

  const IsIdealForBusiness = [
    "Commercial Office Space",
    "Commercial Shop",
    "Commercial Showroom",
  ];

  const RegulerFeatures = [
    "Flat/ Apartment",
    "Residential House",
    "Villa",
    "Farm House",
    "Pent house",
  ];

  const LandFeatures = [
    "Industrial Shed",
    "Agricultural Land",
    "Commercial Land",
    "Residential Land/ Plot",
  ];

  const CommercialOfficeFeatures = [
    "Warehouse/ Godown",
    "Commercial Office Space",
    "Commercial Shop",
    "Commercial Showroom",
  ];

  const housing = ["Residential House", "Farm House", "Villa"];

  const oneToTen = Array.from({ length: 10 }, (_, index) => String(index + 1));

  const twoHundredArray = Array.from({ length: 200 }, (_, index) => index + 1);

  const SelectorInput = (label, key, allData, value) => {
    return (
      <div className="flex flex-wrap input-box">
        <label className="filter-label">{label}</label>
        <SelectPlaceholder
          placeholder={label}
          handleChange={handleSelectChange}
          name={key}
          value={value}
          options={allData}
        />
      </div>
    );
  };

  const renderOwnerDetails = () => {
    if (clientData?.clientType !== "Owner") return null;

    return (
      <div className="w-full flex flex-wrap owner-detail-section my-3">
        <Typography variant="span" className="form-label mt-4 text-left">
          Personal Details
        </Typography>
        {["Name", "Mobile", "Email"].map((label) => (
          <div key={label} className="d-flex flex-wrap input-box">
            <label className="filter-label">{label}</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field"
              placeholder={`Enter Your ${label}`}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderPropertyDetails = () => {
    const propertyOptions = [
      "Flat/ Apartment",
      "Residential House",
      "Villa",
      "Residential Land/ Plot",
      "Pent house",
      "Commercial Office Space",
      "Commercial Shop",
      "Commercial Showroom",
      "Commercial Land",
      "Warehouse/ Godown",
      "Industrial Shed",
      "Agricultural Land",
      "Farm House",
    ];

    return (
      <div className="w-full flex flex-wrap Property-detail-section my-3">
        <Typography variant="span" className="form-label mt-4 text-left">
          Property Details
        </Typography>
        <FormControl className="pl-3 radio-group w-full">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="items-center"
          >
            <span className="mr-3">For</span>
            <FormControlLabel
              value="sale"
              control={<Radio color="default" className="radio-button" />}
              label="Sale"
            />
            <FormControlLabel
              value="rent"
              control={<Radio color="default" className="radio-button" />}
              label="Rent/ Lease"
            />
          </RadioGroup>
        </FormControl>
        <div className="flex flex-wrap input-box">
          <label className="filter-label">Property type</label>
          <SelectPlaceholder
            placeholder="Property type"
            handleChange={handleSelectChange}
            name={"property_type"}
            value={propertyType}
            options={propertyOptions}
          />
        </div>
        {propertyType[0] === "Flat/ Apartment" && (
          <div className="flex flex-wrap input-box">
            <label className="filter-label">
              Total No. of Flats in Your Society
            </label>
            <SelectPlaceholder
              placeholder="Total No"
              handleChange={handleSelectChange}
              name={"total_flats"}
              value={totalFlatCount}
              options={["<50", "50-100", ">100"]}
            />
          </div>
        )}
      </div>
    );
  };

  const handlePropertyLocationLabel = () => {
    if (propertyType[0] === "Flat/ Apartment") {
      return "Name of Project/Society";
    } else {
      return "Locality";
    }
  };

  const renderPropertyLocation = () => {
    return (
      <div className="w-full flex flex-wrap Property-Location-section my-3">
        <Typography variant="span" className="form-label mt-4 text-left">
          Property Location
        </Typography>
        <div className="flex flex-wrap input-box">
          <label className="filter-label">City</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="text-field"
            placeholder="Enter Your City"
          />
        </div>
        <div className="flex flex-wrap input-box">
          <label className="filter-label">
            {handlePropertyLocationLabel()}
          </label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="text-field"
            placeholder={handlePropertyLocationLabel()}
          />
        </div>
        {CommercialPlaces.includes(propertyType[0]) && (
          <div className="flex flex-wrap input-box">
            <label className="filter-label">Land Zone</label>
            <SelectPlaceholder
              placeholder="Land Zone"
              // handleChange={handleSelectChange}
              // name={"total_flats"}
              // value={totalFlatCount}
              options={["Commercial", "Residental"]}
            />
          </div>
        )}
        {IsIdealForBusiness.includes(propertyType[0]) && (
          <div className="flex flex-wrap input-box">
            <label className="filter-label">Ideal For Businesses</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field"
              placeholder="Ideal For Businesses"
            />
          </div>
        )}
      </div>
    );
  };

  const renderPropertyFeatures = () => {
    return (
      <div className="w-full flex flex-wrap property-feature-section my-3">
        <Typography variant="span" className="form-label mt-4 text-left">
          Property Features
        </Typography>
        {SelectorInput(
          "Bedrooms",
          "Bedrooms",
          oneToTen,
          otherSelects?.Bedrooms
        )}
        {SelectorInput(
          "Balconies",
          "Balconies",
          oneToTen,
          otherSelects?.Balconies
        )}
        {SelectorInput(
          "Floor No.",
          "floor_no",
          [].concat(
            ["Lower Basement", "Upper Basement", "Ground"],
            twoHundredArray
          ),
          otherSelects?.floor_no
        )}
        {SelectorInput(
          "Total Floors",
          "total_floors",
          twoHundredArray,
          otherSelects?.total_floors
        )}
        {SelectorInput(
          "Furnished Status",
          "furnished_status",
          ["Furnished", "Unfurnished", "Semi-Furnished"],
          otherSelects?.furnished_status
        )}
        {SelectorInput(
          "Bathrooms",
          "Bathrooms",
          oneToTen,
          otherSelects?.Bathrooms
        )}
        {housing.includes(propertyType[0]) &&
          SelectorInput(
            "Floors Allowed for construction",
            "allowed_floor_contruction",
            oneToTen,
            otherSelects?.allowed_floor_contruction
          )}
        {housing.includes(propertyType[0]) &&
          SelectorInput(
            "No of open sides",
            "no_of_open_sides",
            ["1", "2", "3", "4"],
            otherSelects?.no_of_open_sides
          )}
        {housing.includes(propertyType[0]) &&
          SelectorInput(
            "Width of road facing the plot",
            "width_of_open_side",
            ["1", "2", "3", "4"],
            otherSelects?.width_of_open_side
          )}
        {housing.includes(propertyType[0]) && (
          <div className="flex flex-wrap input-box">
            <label className="filter-label">
              Width of road facing the plot (m)
            </label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field"
              placeholder="Width of road facing the plot"
            />
          </div>
        )}
      </div>
    );
  };

  const renderCommercialPropertyFeatures = () => {
    return (
      <div className="w-full flex flex-wrap property-feature-section my-3">
        <Typography variant="span" className="form-label mt-4 text-left">
          Property Features
        </Typography>
        {SelectorInput(
          "Floor No.",
          "floor_no",
          [].concat(
            ["Lower Basement", "Upper Basement", "Ground"],
            twoHundredArray
          ),
          otherSelects?.floor_no
        )}
        {SelectorInput(
          "Total Floors",
          "total_floors",
          twoHundredArray,
          otherSelects?.total_floors
        )}
        {SelectorInput(
          "Furnished Status",
          "furnished_status",
          ["Furnished", "Unfurnished", "Semi-Furnished"],
          otherSelects?.furnished_status
        )}
        {SelectorInput(
          "Bathrooms",
          "Bathrooms",
          oneToTen,
          otherSelects?.Bathrooms
        )}
        <FormControl className="pl-3 radio-group w-full">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="items-center"
          >
            <span className="mr-3">Personal Washroom:</span>
            <FormControlLabel
              value="yes"
              control={<Radio color="default" className="radio-button" />}
              label="Yes"
            />
            <FormControlLabel
              value="rent"
              control={<Radio color="default" className="radio-button" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
        <FormControl className="pl-3 radio-group w-full">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="items-center"
          >
            <span className="mr-3">Pantry/Cafeteria:</span>
            <FormControlLabel
              value="dry"
              control={<Radio color="default" className="radio-button" />}
              label="Dry"
            />
            <FormControlLabel
              value="wet"
              control={<Radio color="default" className="radio-button" />}
              label="Wet"
            />
            <FormControlLabel
              value="not_avail"
              control={<Radio color="default" className="radio-button" />}
              label="Not Available"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  };

  const renderLandPropertyFeatures = () => {
    return (
      <div className="w-full flex flex-wrap property-feature-section my-3">
        <Typography variant="span" className="form-label mt-4 text-left">
          Property Features
        </Typography>
        {SelectorInput(
          "Floors Allowed for construction",
          "allowed_floor_contruction",
          oneToTen,
          otherSelects?.allowed_floor_contruction
        )}
        {SelectorInput(
          "No of open sides",
          "no_of_open_sides",
          ["1", "2", "3", "4"],
          otherSelects?.no_of_open_sides
        )}
        {SelectorInput(
          "Width of road facing the plot",
          "width_of_open_side",
          ["1", "2", "3", "4"],
          otherSelects?.width_of_open_side
        )}
        <div className="flex flex-wrap input-box">
          <label className="filter-label">
            Width of road facing the plot (m)
          </label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="text-field"
            placeholder="Width of road facing the plot"
          />
        </div>
        <FormControl className="pl-3 radio-group w-full">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="items-center"
          >
            <span className="mr-3">Boundary wall made: </span>
            <FormControlLabel
              value="yes"
              control={<Radio color="default" className="radio-button" />}
              label="Yes"
            />
            <FormControlLabel
              value="rent"
              control={<Radio color="default" className="radio-button" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  };

  const renderAreaSection = () => {
    const isLandFeature =
      propertyType && LandFeatures.includes(propertyType[0]);

    return (
      <div className="w-full flex flex-wrap property-feature-section my-3">
        <Typography variant="span" className="form-label mt-4 text-left">
          Area{" "}
          {propertyType &&
            !isLandFeature &&
            `(Provide either Carpet Area or Super Area)`}
          :
        </Typography>

        {!isLandFeature && (
          <>
            <div className="flex flex-wrap input-box">
              <label className="filter-label">Carpet Area (Sq-ft)</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field"
                placeholder="Carpet Area"
              />
            </div>
            <div className="flex flex-wrap input-box">
              <label className="filter-label">Super Area (Sq-ft)</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field"
                placeholder="Super Area"
              />
            </div>
          </>
        )}

        {isLandFeature && (
          <>
            <div className="flex flex-wrap input-box">
              <label className="filter-label">Plot Area (Sq-yrd)</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field"
                placeholder="Plot Area"
              />
            </div>
            <div className="flex flex-wrap input-box">
              <label className="filter-label">Plot Length (yrd)</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field"
                placeholder="Plot Length"
              />
            </div>
            <div className="flex flex-wrap input-box">
              <label className="filter-label">Plot Breadth (yrd)</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field"
                placeholder="Plot Breadth"
              />
            </div>
            <FormControlLabel
              className="flex text-left w-full"
              control={<Checkbox className="checkboxx" />}
              label={
                <span className="checkbox-text">This is a corner plot</span>
              }
            />
          </>
        )}
      </div>
    );
  };

  const renderPropertyAvaibality = () => {
    const isUnderConstruction =
      radioButtonData?.possession_status !== "ready_to_move";

    return (
      <div className="w-full flex flex-wrap property-feature-section my-3">
        <Typography variant="span" className="form-label mt-4 text-left">
          Transaction Type, Property Availability
        </Typography>
        <FormControl className="pl-3 w-full radio-group">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="items-center"
            onChange={handleRadioChange}
            value={radioButtonData?.possession_status}
          >
            <span className="mr-3">Possession Status: </span>
            <FormControlLabel
              name="possession_status"
              value="under_construction"
              control={<Radio color="default" className="radio-button" />}
              label="Under Construction"
            />
            <FormControlLabel
              name="possession_status"
              value="ready_to_move"
              control={<Radio color="default" className="radio-button" />}
              label="Ready to Move"
            />
          </RadioGroup>
        </FormControl>
        {isUnderConstruction ? (
          <>
            {SelectorInput("Month", "Month", oneToTen, otherSelects?.Month)}
            {SelectorInput("Year", "Year", oneToTen, otherSelects?.Year)}
          </>
        ) : (
          SelectorInput(
            "Age of Construction",
            "age_construction",
            oneToTen,
            otherSelects?.age_construction
          )
        )}
      </div>
    );
  };

  const renderPriceSection = () => {
    return (
      <div className="w-full flex flex-wrap property-feature-section my-3">
        <Typography variant="span" className="form-label mt-4 text-left">
          Price Details
        </Typography>
        <div className="flex flex-wrap input-box">
          <label className="filter-label">Expected Price</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="text-field"
            placeholder="Expected Price"
          />
        </div>
        <div className="flex flex-wrap input-box">
          <label className="filter-label">
            Booking/Token Amount (optional)
          </label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="text-field"
            placeholder="₹ Booking/Token Amount"
          />
        </div>
        <FormControlLabel
          className="flex text-left w-full"
          control={<Checkbox color="default" className="checkboxx" />}
          label={<span className="checkbox-text">Price Negotiable</span>}
        />
      </div>
    );
  };

  const renderImageUploadSection = () => {
    return (
      <div className="w-full flex flex-wrap property-feature-section my-3">
        <Typography variant="span" className="form-label mt-4 text-left">
          Photos
        </Typography>
        <Dropzone />
      </div>
    );
  };

  return (
    <Box
      component="main"
      className="post-property-page"
      sx={isMobileScreen?{ flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }:{flexGrow: 1, p: 3, mt: 8, maxWidth: "calc(100% - 280px)" }}
    >
      <div className="add-menu-form text-left mx-auto my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Property{" "}
        </Typography>
        <Box className="filter-section my-3 flex">
          <Box className="main-filter w-full">
            <Box className="tabs">
              {["Owner", "Agent", "Builder"].map((type) => (
                <Box
                  key={type}
                  className={`tab ${
                    clientData?.clientType === type ? "selected" : ""
                  }`}
                >
                  <Typography
                    variant="p"
                    onClick={onTypeChange}
                    className="first-tab"
                    id={type}
                  >
                    {type}
                  </Typography>
                </Box>
              ))}
            </Box>
            {renderOwnerDetails()}
            {renderPropertyDetails()}
            {renderPropertyLocation()}
            {propertyType && RegulerFeatures.includes(propertyType[0])
              ? renderPropertyFeatures()
              : propertyType && LandFeatures.includes(propertyType[0])
              ? renderLandPropertyFeatures()
              : propertyType &&
                CommercialOfficeFeatures.includes(propertyType[0])
              ? renderCommercialPropertyFeatures()
              : ""}
            <div className="add-menu-input w-1/2  my-3">
              <Typography variant="span" className="form-label mt-4 text-left">
                Property Description
              </Typography>
              <CKEditor
                editor={ClassicEditor}
                data=""
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event) => {
                  console.log(event);
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </div>
            {propertyType.length ? renderAreaSection() : ""}
            {propertyType.length
              ? !LandFeatures.includes(propertyType[0]) &&
                renderPropertyAvaibality()
              : ""}
            {propertyType.length ? renderPriceSection() : ""}
            {propertyType.length ? renderImageUploadSection() : ""}
            <FormControlLabel
              className="flex items-center w-full text-left"
              control={<Checkbox color="default" className="checkboxx" />}
              label={
                <span className="checkbox-text">
                  I agree to the{" "}
                  <Typography variant="span" color="error">
                    Privacy & Policy *
                  </Typography>
                  {"  "} and {"  "}
                  <Typography variant="span" color="error">
                    terms & conditions *
                  </Typography>
                </span>
              }
            />
            <FormControlLabel
              className="flex items-center w-full text-left mb-3"
              control={<Checkbox color="default" className="checkboxx" />}
              label={
                <span className="checkbox-text">
                  I am posting this property 'exclusively' on Vishal
                  Construction
                </span>
              }
            />
            <button
              type="button"
              className="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Save
            </button>
          </Box>
        </Box>
      </div>
    </Box>
  );
}
export default AddPropertyPage;
