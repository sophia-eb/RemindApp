import {createStore} from "redux";

import weatherReducer from "../reducer";

const store = createStore(weatherReducer);

export default store;
