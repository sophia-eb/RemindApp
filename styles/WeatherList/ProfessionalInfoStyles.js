import {StyleSheet} from "react-native";

module.exports = StyleSheet.create({
  wrapContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "center",
    width: "auto",
    height: 46,
  },
  wrapView: {
    width: 116,
    height: 32,
    textAlign: "left",
  },
  wrapText: {
    fontSize: 16,
    lineHeight: 20,
    color: "#0583d2",
  },
  iconView: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#bbb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    height: 16,
    width: 16,
  },
});
