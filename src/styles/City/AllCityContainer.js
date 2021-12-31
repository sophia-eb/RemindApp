import {StyleSheet} from "react-native";

import { themeColor } from "../../../Constants";

module.exports = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 10,
  },
  inputTextStyle: {
    height: 45,
    backgroundColor: "#ffffff",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
  },
  searchCityContent: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: themeColor.grayColor,
    borderRadius: 10,
  },
  searchItemStyle: {
    borderBottomWidth: 1,
    borderBottomColor: themeColor.grayColor,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  recommendCityContent: {
    justifyContent: "center",
  },
  recommendItemStyle: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: themeColor.grayColor,
    // borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginVertical: 4,
    marginHorizontal: 18,
  },
  hideItemStyle: {
    color: themeColor.grayColor,
  },
});
