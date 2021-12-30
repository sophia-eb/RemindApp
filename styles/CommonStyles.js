import {StyleSheet} from "react-native";

import { themeColor } from "../Constants";

module.exports = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eeeeee",
    margin: 16,
    marginVertical: 8,
    padding: 14,
  },
  cardTitle: {
    fontSize: 18,
    paddingVertical: 6,
  },

  height36: {
    height: 36,
  },
  height54: {
    height: 54,
  },

  padding10: {
    padding: 10,
  },

  textColor: {
    color: themeColor.titleColor,
  },
  textColorBlue: {
    color: themeColor.textColorBlue,
  },

  fontSize14: {
    fontSize: 14,
    lineHeight: 22,
  },
  fontSize16: {
    fontSize: 16,
    lineHeight: 20,
  },
  fontSize18: {
    fontSize: 18,
  },
  fontSize20: {
    fontSize: 20,
  },

  borderBottom: {
    borderWidth: 1,
    borderColor: themeColor.grayColor,
  },
});
