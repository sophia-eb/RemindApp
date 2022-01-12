import AsyncStorage from "@react-native-async-storage/async-storage";

const setItem = (key, value) => {
  let willStoredValue = typeof value === "object" ? JSON.stringify(value) : value;
  AsyncStorage.setItem(key, willStoredValue).then((r) => {});
};

const getItem = (key) => {
  return AsyncStorage.getItem(key)
    .then((value) => {
      return value;
    })
    .catch(() => {
      return null;
    });
};

const removeItem = (key) => {
  return AsyncStorage.removeItem(key).then((r) => {});
};

const clearMap = () => {
  AsyncStorage.clear().then(() => {});
};

export const localStorage = {
  setItem,
  getItem,
  removeItem,
  clearMap,
};
