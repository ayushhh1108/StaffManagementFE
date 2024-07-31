import React, { useState } from "react";
import "./index.scss";
import AddPropertyPageHooks from "./AddPropertyPageHooks";
import {
  Autocomplete,
  Box,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Dropzone from "../../components/DropZone";
import SelectPlaceholder from "../../components/SelectPlaceholder";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

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
    isMobileScreen,
    twoHundredArray,
    oneToTen,
    housing,
    CommercialOfficeFeatures,
    LandFeatures,
    RegulerFeatures,
    IsIdealForBusiness,
    CommercialPlaces,
    allData,
    handleInputsChange,
    handleSubmit,
    Features,
    setFeatures,
    tags, setTags,
    inputValue, setInputValue,
    classes,
    handleDelete,
    handleKeyDown,
  } = AddPropertyPageHooks();

  console.log("allData+++", allData);
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
              variant="outlined"
              className="text-field"
              id={label}
              value={allData[label]}
              onChange={handleInputsChange}
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
            className="items-center"
            name="for"
            value={allData?.for}
            onChange={handleInputsChange}
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
    const propertyLocationLabel = handlePropertyLocationLabel()?.replace(
      " ",
      "_"
    );
    return (
      <div className="w-full flex flex-wrap Property-Location-section my-3">
        <Typography variant="span" className="form-label mt-4 text-left">
          Property Location
        </Typography>
        <div className="flex flex-wrap input-box">
          <label className="filter-label">City</label>
          <TextField
            variant="outlined"
            className="text-field"
            id="city"
            value={allData["city"]}
            onChange={handleInputsChange}
            placeholder="Enter Your City"
          />
        </div>
        <div className="flex flex-wrap input-box">
          <label className="filter-label">
            {handlePropertyLocationLabel()}
          </label>
          <TextField
            variant="outlined"
            className="text-field"
            id={propertyLocationLabel}
            value={allData[propertyLocationLabel]}
            onChange={handleInputsChange}
            placeholder={handlePropertyLocationLabel()}
          />
        </div>
        {CommercialPlaces.includes(propertyType[0]) && (
          <div className="flex flex-wrap input-box">
            <label className="filter-label">Land Zone</label>
            <SelectPlaceholder
              placeholder="Land Zone"
              handleChange={handleSelectChange}
              name={"land_zone"}
              value={otherSelects?.land_zone}
              options={["Commercial", "Residental"]}
            />
          </div>
        )}
        {IsIdealForBusiness.includes(propertyType[0]) && (
          <div className="flex flex-wrap input-box">
            <label className="filter-label">Ideal For Businesses</label>
            <TextField
              variant="outlined"
              className="text-field"
              id="ideal_for_bussiness"
              value={allData?.ideal_for_bussiness}
              onChange={handleInputsChange}
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
              variant="outlined"
              className="text-field"
              id="width_of_road_facing_plot"
              value={allData?.width_of_road_facing_plot}
              onChange={handleInputsChange}
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
            className="items-center"
            name="personal_washroom"
            value={allData?.personal_washroom}
            onChange={handleInputsChange}
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
            className="items-center"
            name="pantry_cafeteria"
            value={allData?.pantry_cafeteria}
            onChange={handleInputsChange}
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
            variant="outlined"
            className="text-field"
            id="width_of_road_facing_plot"
            value={allData?.width_of_road_facing_plot}
            onChange={handleInputsChange}
            placeholder="Width of road facing the plot"
          />
        </div>
        <FormControl className="pl-3 radio-group w-full">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            className="items-center"
            name="boundary_walls"
            value={allData?.boundary_walls}
            onChange={handleInputsChange}
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
                variant="outlined"
                className="text-field"
                placeholder="Carpet Area"
                id="carpet_area"
                value={allData?.carpet_area}
                onChange={handleInputsChange}
              />
            </div>
            <div className="flex flex-wrap input-box">
              <label className="filter-label">Super Area (Sq-ft)</label>
              <TextField
                variant="outlined"
                className="text-field"
                placeholder="Super Area"
                id="super_area"
                value={allData?.super_area}
                onChange={handleInputsChange}
              />
            </div>
          </>
        )}

        {isLandFeature && (
          <>
            <div className="flex flex-wrap input-box">
              <label className="filter-label">Plot Area (Sq-yrd)</label>
              <TextField
                id="plot_area"
                value={allData?.plot_area}
                onChange={handleInputsChange}
                variant="outlined"
                className="text-field"
                placeholder="Plot Area"
              />
            </div>
            <div className="flex flex-wrap input-box">
              <label className="filter-label">Plot Length (yrd)</label>
              <TextField
                id="plot_length"
                value={allData?.plot_length}
                onChange={handleInputsChange}
                variant="outlined"
                className="text-field"
                placeholder="Plot Length"
              />
            </div>
            <div className="flex flex-wrap input-box">
              <label className="filter-label">Plot Breadth (yrd)</label>
              <TextField
                id="plot_breadth"
                value={allData?.plot_breadth}
                onChange={handleInputsChange}
                variant="outlined"
                className="text-field"
                placeholder="Plot Breadth"
              />
            </div>
            <FormControlLabel
              className="flex text-left w-full"
              control={
                <Checkbox
                  color="default"
                  id="is_corner_plot"
                  value={allData?.is_corner_plot}
                  onChange={handleInputsChange}
                  className="checkboxx"
                />
              }
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
            id="expected_price"
            value={allData?.expected_price}
            onChange={handleInputsChange}
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
            id="token_amt"
            value={allData?.token_amt}
            onChange={handleInputsChange}
            variant="outlined"
            className="text-field"
            placeholder="₹ Booking/Token Amount"
          />
        </div>
        <FormControlLabel
          className="flex text-left w-full"
          control={
            <Checkbox
              id="is_price_negotiable"
              value={allData?.is_price_negotiable}
              onChange={handleInputsChange}
              color="default"
              className="checkboxx"
            />
          }
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
        <Dropzone id="image" onChanges={handleInputsChange} />
      </div>
    );
  };

  return (
    <Box
      component="main"
      className="post-property-page"
      sx={
        isMobileScreen
          ? { flexGrow: 1, p: 3, mt: 8, maxWidth: "100%" }
          : { flexGrow: 1, p: 3, mt: 8, maxWidth: "calc(100% - 280px)" }
      }
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
                  className={`tab ${clientData?.clientType === type ? "selected" : ""
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
            <div className="w-full flex flex-wrap Property-Location-section my-3" >
              <div
                key={"Property_Title"}
                className="d-flex flex-wrap input-box"
              >
                <label className="filter-label">{"Property Title"}</label>
                <TextField
                  variant="outlined"
                  className="text-field"
                  id={"propertyTitle"}
                  value={allData["propertyTitle"]}
                  onChange={handleInputsChange}
                  placeholder={`Enter Your ${"Property Title"}`}
                />
              </div>
              <div
                key={"Property_sub_Title"}
                className="d-flex flex-wrap input-box"
              >
                <label className="filter-label">{"Property sub Title"}</label>
                <TextField
                  variant="outlined"
                  className="text-field"
                  id={"propertySubTitle"}
                  value={allData["propertySubTitle"]}
                  onChange={handleInputsChange}
                  placeholder={`Enter Your ${"Property Title"}`}
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap mx-3" >
              <label className="filter-label ">{"Property Tags"}</label>
            </div>
            <div className={`items-center w-full input-box flex flex-wrap Property-Location-section !my-0`}>
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  onDelete={handleDelete(tag)}
                  className="bg-blue-100 text-blue-700"
                />
              ))}
              <TextField
                variant="outlined"
                className="text-field"
                value={allData["propertytags"]}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type and press enter..."
              />
            </div>
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
                data={allData?.editor_property_desc}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  handleInputsChange({
                    target: {
                      value: editor?.getData(),
                      id: "editor_property_desc",
                    },
                  });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <div
                key={"Property_Feature"}
                className="flex flex-wrap w-100"
                style={{ width: "100%" }}
              >
                <label className="filter-label block w-full">
                  {"Property Feature"}
                </label>
                {Features?.map((item, index) => (
                  <div className="flex items-center w-auto">
                    <TextField
                      variant="outlined"
                      style={{ marginRight: "7px", marginTop: "7px" }}
                      className="text-field mr-1"
                      id={"Property_Feature"}
                      value={allData["Property_Feature"]}
                      onChange={handleInputsChange}
                      placeholder={`Enter Feature`}
                    />
                    {Features.length - 1 === index && (
                      <div className="items-center">
                        <FaPlus
                          className="mx-3 cursor-pointer my-5"
                          onClick={() => {
                            setFeatures([
                              ...Features,
                              { key: Features.length + 1 },
                            ]);
                          }}
                        />
                        <FaMinus className="mx-3 cursor-pointer my-1" onClick={() => { setFeatures(Features.slice(0, -1)) }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
              control={
                <Checkbox
                  id="privacy_and_condition"
                  value={allData?.privacy_and_condition}
                  onChange={handleInputsChange}
                  color="default"
                  className="checkboxx"
                />
              }
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
              control={
                <Checkbox
                  id="post_confirmation"
                  value={allData?.post_confirmation}
                  onChange={handleInputsChange}
                  color="default"
                  className="checkboxx"
                />
              }
              label={
                <span className="checkbox-text">
                  I am posting this property 'exclusively' on Vishal
                  Construction
                </span>
              }
            />
            <button
              type="button"
              onClick={handleSubmit}
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
