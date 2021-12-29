import {StyleSheet} from "react-native";

import { themeColor } from "../../Constants";

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
  closePanel: {
    backgroundColor: themeColor.grayColor,
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
    borderColor: themeColor.textColorBlue,
    backgroundColor: themeColor.textColor,
  },
});
