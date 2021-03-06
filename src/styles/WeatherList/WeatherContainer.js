import {StyleSheet, Platform} from "react-native";

import {themeColor} from "../../../Constants";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor.lightGrayColor,
  },
  bakImage: {
    flex: 1,
    height: 440,
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
  cardTitleImg: {
    width: 20,
    height: 20,
    marginVertical: 8,
    marginHorizontal: 4
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addButtonStyle: {
    height: 38,
    width: 120,
    includeFontPadding: false,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: themeColor.textColorBlue,
    backgroundColor: themeColor.textColor,
    ...Platform.select({
      ios: { lineHeight: 38},
      android: {}
    })
  },
  firstAddCityButton: {
    textDecorationLine: "underline",
  },
  tempCard: {
    left: 0,
    backgroundColor: themeColor.backgroundColor,
    borderRadius: 10,
    paddingVertical: 10,
  },
  tempCardContent: {
    width: 62,
    height: 96,
    padding: 4,
    borderWidth: 0.5,
    borderColor: themeColor.lightGrayColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
