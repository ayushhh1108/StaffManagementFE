import LocalStorageManager from './local-storage-manager';

export const getBearerToken = () => {
    return LocalStorageManager.getLocalStorage("BEARER_TOKEN");
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

export const isAuthenticated = () => {
  const token = getBearerToken();
  if (token) {
    return true;
  }
  return false;
};

