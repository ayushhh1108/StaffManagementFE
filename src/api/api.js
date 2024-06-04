import axios from "axios";
import { getToken } from "../utils/auth";

const createAPI = () => {
  const customerApiUrl = process.env.REACT_APP_API_BASE_URL;

  const headers = {
    "Content-Type": "application/json",
  };

  console.log("customerApiUrl", customerApiUrl);

  const api = axios.create({
    baseURL: customerApiUrl,
    headers,
  });

  api.interceptors.request.use(async (config) => {
    const data = localStorage.getItem("user");
    console.log("config", config);
    if (data) {
      config.headers[`Authorization`] = data;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        return error;
      }
      return error;
    }
  );

  // api.interceptors.response.use(
  //     (response) => response,
  //     async (err) => err
  // );
  return api;
};

export default createAPI();
