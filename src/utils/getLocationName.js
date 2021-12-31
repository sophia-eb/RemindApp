import {locationList} from "./locationList";

export const getLocationName = (cityId) => {
  let cityName = "";
  locationList.forEach(city => {
    if (city["Location_ID"] === cityId) {
      cityName = city["Location_Name_ZH"];
    }
  });
  return cityName;
};
