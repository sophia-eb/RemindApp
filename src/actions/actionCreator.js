import { SET_CITY_LIST, SET_DEFAULT_CITY } from "./actionType";

export function setCityList(cities) {
  return {
    type: SET_CITY_LIST,
    cities
  };
}

export function setDefaultCity(city) {
  return {
    type: SET_DEFAULT_CITY,
    city
  };
}
