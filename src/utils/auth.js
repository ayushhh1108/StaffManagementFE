import LocalStorageManager from "./local-storage-manager";
import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  // Check if token exists in local storage
  return isAuthenticated() ? children : <Navigate to="/login" />;
  //  return children;
};

export const getToken = async () => {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const token = localStorageData?.token;
  return token;
};

export const setBearerToken = (token) => {
  return LocalStorageManager.setLocalStorage("BEARER_TOKEN", `Bearer ${token}`);
  //   return SessionStorageManager.setSessionStorage(
  //     BEARER_TOKEN,
  //     `Bearer ${token}`
  //   );
};
export const setToken = (token) => {
  return LocalStorageManager.setLocalStorage("TOKEN", token);
  //   return SessionStorageManager.setSessionStorage(
  //     BEARER_TOKEN,
  //     `Bearer ${token}`
  //   );
};

export const removeBearerToken = () => {
  return LocalStorageManager.removeLocalStorage("BEARER_TOKEN");
};

export const logOut = () => {
  return LocalStorageManager.clearLocalStorage();
};

export const isAuthenticated = () => Boolean(getToken());
