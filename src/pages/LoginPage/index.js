import React, { useState } from "react";
import "./index.scss";

import LoginPageHook from "./loginPageHooks";
import { Grid } from "@mui/material";

function LoginPage() {
  const {
    navigate,
    handleSubmit,
    handleInputChange,
    creds,
    isForget,
    setIsForget,
  } = LoginPageHook();

  return (
    <div className="Login-page">
      <div className="container px-6 min-h-screen mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row min-h-screen justify-evenly md:items-center login-main-container">
          <div className="flex flex-col w-full login-left">
            <div>
              <svg
                className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <h1 className="text-5xl text-gray-800 font-bold">Admin Area</h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
              Unlock Your World: Admin Access Await
            </p>
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0 login-right">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              {!isForget ? (
                <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                  Log In
                </h2>
              ) : (
                <label
                  for="username"
                  className="text-gray-500 mb-2 input-labels"
                >
                  Can't remember your password? Kindly type in your email
                  address. An email with a password creation link will be sent
                  to you.
                </label>
              )}
              <form action="" className="w-full">
                <div id="input" className="flex flex-col w-full my-5">
                  <label
                    for="username"
                    className="text-gray-500 mb-2 input-labels"
                  >
                    {isForget ? "Email" : "Username"}
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={creds?.username}
                    onChange={handleInputChange}
                    placeholder="Please insert your username"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:shadow-lg"
                  />
                </div>
                {!isForget && (
                  <div id="input" className="flex flex-col w-full my-5">
                    <label
                      for="password"
                      className="text-gray-500 mb-2 input-labels"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={creds?.password}
                      onChange={handleInputChange}
                      placeholder="Please insert your password"
                      className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:shadow-lg"
                    />
                  </div>
                )}
                <div id="button" className="flex flex-col w-full my-5">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gray-600 rounded-lg text-gray-100"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="mr-2">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </div>
                      <div className="font-bold">
                        {isForget ? "Get New Password" : "Log In"}
                      </div>
                    </div>
                  </button>
                </div>
                <Grid container className="flex text-left mt-5">
                  {/* {isForget ? (
                    <span
                      variant="body2"
                      className="d-block font-medium text-gray-500 text-left cursor-pointer input-labels "
                      onClick={() => setIsForget(false)}
                    >
                      Back to login
                    </span>
                  ) : (
                    <span
                      variant="body2"
                      className="d-block font-medium text-gray-500 text-left cursor-pointer input-labels "
                    >
                      Forgot password?
                    </span>
                  )} */}
                  {!isForget && (
                    <Grid
                      item
                      onClick={() => {
                        navigate("/sign-up");
                      }}
                      className="w-full font-medium text-gray-500 text-left mt-3 pt-3 input-labels"
                    >
                      Get new company Account ?
                    </Grid>
                  )}
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
