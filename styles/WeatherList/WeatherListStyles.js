import {StyleSheet} from "react-native";
import {getRealDP} from "../../utils/adapaterUtil";

// const colors = ["#f6dae4", "#d4f0f7", "#d0d5f7", "#b8cfec"];
// const colors1 = ["#fc8955", "#0583d2", "#4fd6f7", "#b8e3ff"];

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  bakImage: {
    flex: 1,
    height: 420,
    justifyContent: "center",
  },
  centerTempText: {
    textAlign: "center",
    fontSize: 60,
    color: "#fc8955",
  },
  centerText: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 20,
    paddingBottom: 10,
    color: "#fc8955",
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
  chartContainer: {
    position: "relative",
    left: -26,
  },
  cardTitle: {
    fontSize: 18,
    paddingVertical: 6,
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
  wrapView: {
    width: 140,
    height: 48,
    textAlign: "left",
  },
  wrapTextName: {
    fontSize: 14,
    lineHeight: 22,
  },
  wrapText: {
    fontSize: 16,
    lineHeight: 20,
    color: "#0583d2",
  },
});
