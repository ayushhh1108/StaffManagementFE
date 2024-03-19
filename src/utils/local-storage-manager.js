const LocalStorageManager = {
  setLocalStorage: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },

  getLocalStorage: (name) => {
    const data = localStorage.getItem(name);
    if (data) {
      return data;
    }
    return data;
  },

  removeLocalStorage: (name) => {
    return localStorage.removeItem(name);
  },

  clearLocalStorage: () => {
    return localStorage.clear();
  },
};

export default LocalStorageManager;
