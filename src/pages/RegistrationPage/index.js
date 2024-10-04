import React from "react";
import "./index.scss";
import RegistrationPageHook from "./registrationPagePageHooks";
import { Grid } from "@mui/material";
import { fields } from "./constant";


function RegistrationPage() {
  const {
    navigate,
    handleInputChange,
    creds,
    handleSubmit,
    formname,
    setFormName,
  } = RegistrationPageHook();

  return (
    <div className="Registration-page">
      <div className="container px-6 min-h-screen mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row min-h-screen justify-evenly md:items-center login-main-container">
          <div className="flex flex-col w-full login-left">
            <Logo />
            <h1 className="text-5xl text-gray-800 font-bold">Admin Area</h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
              Unlock Your business: Admin Access Await
            </p>
          </div>
          <div className="w-full md:w-full lg:w-full mx-auto md:mx-0 login-right">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                {formname}
              </h2>
              <RegistrationForm
                creds={creds}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                navigate={navigate}
                formname={formname}
                setFormName={setFormName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Logo = () => (
  <div>
    <svg
      className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </svg>
  </div>
);

const RegistrationForm = ({
  creds,
  handleInputChange,
  handleSubmit,
  navigate,
  formname,
  setFormName,
}) => {
  const newFields = ["website", "companyName"];
  const aa = !(formname === "Company Account")
    ? fields?.filter((i) => !newFields.includes(i.id))
    : fields;
  return (
    <form className="w-full flex flex-wrap">
      {aa?.map((field) => (
        <InputField
          key={field?.id}
          id={field?.id}
          label={field?.label}
          value={creds?.[field?.id] || ""}
          onChange={handleInputChange}
          placeholder={`Please insert your ${field?.label?.toLowerCase()}`}
          type={field?.type}
        />
      ))}
      <div className="flex flex-col w-full my-5">
        <Button onClick={handleSubmit}>Register</Button>
      </div>
      <Grid container className="flex text-left">
        <Grid
          item
          className="w-full font-medium text-gray-500 text-left mt-1 input-labels"
        >
          Already have an account?
          <span
            onClick={() => {
              navigate("/login");
            }}
            variant="body2"
            className="links cursor-pointer"
          >
            {" Log In"}
          </span>
        </Grid>
        <Grid
          item
          onClick={() => {
            setFormName(
              formname === "Company Account"
                ? "Agent Account"
                : "Company Account"
            );
          }}
          className="w-full font-medium text-gray-500 text-left mt-1 input-labels cursor-pointer"
        >
          Get New {formname === "Company Account" ? "Agent" : "Company"}{" "}
          Account?
        </Grid>
      </Grid>
    </form>
  );
};

const InputField = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  isFull,
}) => (
  <div id="input" className="flex flex-col w-1/2 my-2">
    <label htmlFor={id} className="text-gray-500 mb-1 input-labels">
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:shadow-lg"
    />
  </div>
);

const Button = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
      </div>
      <div className="font-bold">{children}</div>
    </div>
  </button>
);

export default RegistrationPage;
