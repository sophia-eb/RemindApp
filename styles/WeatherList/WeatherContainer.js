import {StyleSheet} from "react-native";

import { themeColorOne } from "../../Constants";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColorOne.lightGrayColor,
  },
  mainContainer: {
    flex: 1,
    display: "flex",
    overflowX: "scroll",
  },
  controlPanel: {
    backgroundColor: themeColorOne.textColor,
    height: "100%",
  },
  closePanel: {
    backgroundColor: themeColorOne.grayColor,
  },
  controlBottom: {
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center',
  },
  addButtonStyle: {
    height: 34,
    width: 120,
    lineHeight: 30,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: themeColorOne.textColorBlue,
    backgroundColor: themeColorOne.textColor,
  },
});
