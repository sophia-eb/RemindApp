import { SET_CITY_LIST, SET_DEFAULT_CITY } from "../actions/actionType";

const initialState = {
  currentCity: null,
  cityList: []
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_CITY:
      return {
        ...state,
        currentCity: action.city
      };
    case SET_CITY_LIST:
      return {
        ...state,
        cityList: action.cities
      };
    default:
      return state;
  }
};

export default weatherReducer;
