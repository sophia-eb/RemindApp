import {StyleSheet} from "react-native";

import { themeColor } from "../../../Constants";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor.lightGrayColor,
  },
  mainContainer: {
    flex: 1,
    display: "flex",
    overflowX: "scroll",
  },
  controlPanel: {
    backgroundColor: themeColor.textColor,
    height: "100%",
  },
  textStyle: {
    fontSize: 16,
    padding: 10,
  },
  closePanel: {
    fontSize: 16,
    padding: 10,
    backgroundColor: themeColor.grayColor,
  },
});
