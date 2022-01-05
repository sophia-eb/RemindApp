import _ from "lodash";

import store from "../store/index";
import { CITY_LIST, DEFAULT_CITY } from "../utils/storage/storageKeyNames";
import { localStorage } from "../utils/storage/storageUtil";
import { list2str, str2list } from "../utils/transformListAndStr";
import { setCityList, setDefaultCity } from "./actionCreator";

export const getCityList = async () => {
  await localStorage.getItem(CITY_LIST).then(res => {
    const currentCityList = _.cloneDeep(str2list(res));
    store.dispatch(setCityList(currentCityList));
  });
};

export const setCurrentCityList = async (cities) => {
  await localStorage.setItem(CITY_LIST, list2str(cities));
  store.dispatch(setCityList(cities));
};

export const getCurrentCity = async () => {
  await localStorage.getItem(DEFAULT_CITY).then(res => {
    store.dispatch(setDefaultCity(res));
  });
};

export const setCurrentCity = async (city) => {
  await localStorage.setItem(DEFAULT_CITY, city);
  store.dispatch(setDefaultCity(city));
};
