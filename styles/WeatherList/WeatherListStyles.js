import {StyleSheet} from "react-native";
import {getRealDP} from "../../utils/adapaterUtil";

// const colors = ["#f6dae4", "#d4f0f7", "#d0d5f7", "#b8cfec"];
// const colors1 = ["#fc8955", "#0583d2", "#4fd6f7", "#b8e3ff"];

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: getRealDP(8),
    borderWidth: 1,
    borderColor: "#eeeeee",
    margin: 16,
    marginVertical: 8,
    padding: 14,
  },
  cardTitle: {
    fontSize: 18,
    paddingVertical: 6,
    color: "#fc8955",
  },
  centerTempText: {
    textAlign: "center",
    fontSize: 36,
    color: "#fc8955",
  },
  centerText: {
    textAlign: "center",
    fontSize: 16,
    paddingBottom: 10,
    color: "#fc8955",
  },
  wrapContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "center",
    width: "auto",
    height: 36
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
  // wrapContent: {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   alignContent: "space-around",
  //   justifyContent: "center",
  //   height: 20,
  // },
  wrapView: {
    width: 150,
    textAlign: "left",
  },
  wrapText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
