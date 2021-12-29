import {StyleSheet} from "react-native";

import { themeColor } from "../../Constants";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor.lightGrayColor,
  },
  bakImage: {
    flex: 1,
    height: 420,
    justifyContent: "center",
    position: "relative",
  },
  cityPanelControl: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
    color: "#444444",
    fontWeight: "bold",
  },
  centerTempText: {
    textAlign: "center",
    fontSize: 60,
  },
  centerText: {
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 20,
    paddingVertical: 5,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#eeeeee",
    margin: 16,
    marginVertical: 8,
    padding: 14,
  },
  chartContainer: {
    position: "relative",
    left: -26,
  },
  wrapContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "center",
    width: "auto",
  },
  wrapTextTitle: {
    fontSize: 16,
  },
  wrapTextContent: {
    fontSize: 20,
    height: 26,
    width: 150,
    textAlign: "center",
  },
  wrapView: {
    width: 140,
    height: 48,
    textAlign: "left",
  },
});
