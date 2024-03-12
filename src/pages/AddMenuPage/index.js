import React, { useState } from "react";
import "./index.scss";

import AddMenuPageHook from "./AddMenuPageHooks";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function AddMenuPage() {
  const { navigate } = AddMenuPageHook();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
      <div class="container add-menu-form text-left my-5">
        <Typography variant="h5" className="mb-5 form-label">
          Add Menu{" "}
        </Typography>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Name*
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 mb-4 add-menu-input"
            placeholder="name"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Description*
          </label>
          <input
            type="text"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 add-menu-input"
            placeholder="description"
            required
          />
        </div>
        <div className="my-4">
          <label class="inline-flex items-center cursor-pointer">
            <span class="mr-3 text-sm font-medium text-gray-900 ">
              Activity Status
            </span>
            <input
              type="checkbox"
              value=""
              class="sr-only peer toggle-button"
            />
            <div class="toggle-button-div relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#164e6357] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#164e63]"></div>
          </label>
        </div>
        <button
          type="button"
          class="text-white bg-[#1e6c89] hover:bg-[#164e63] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Save
        </button>
        <button
          type="button"
          class="text-white bg-[#b3b4b7] hover:bg-[#818183] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Cencel
        </button>
      </div>
    </Box>
  );
}
export default AddMenuPage;
