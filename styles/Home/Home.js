import {StyleSheet} from "react-native";
import {getRealDP} from "../../utils/adapaterUtil";

const colors = ["#f6dae4", "#d4f0f7", "#d0d5f7", "#b8cfec"];
const colors1 = ["#fc8955", "#0583d2", "#4fd6f7", "#b8e3ff"];

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  cardContainer: {
    flex: 1,
    borderRadius: getRealDP(8),
    backgroundColor: "#b8e3ff",
  },
  viewContainer: {
    flex: 1,
    // backgroundColor: "#b8e3ff",
    display: "flex",
    overflowX: "scroll",
    // width: "",
  },
  cardTitle: {

  },
  centerTempText: {
    textAlign: "center",
    fontSize: 36,
  },
  centerText: {
    textAlign: "center",
    fontSize: 16,
    paddingBottom: 10,
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
  wrapText: {
    fontSize: 20,
    height: 26,
    width: 150,
    textAlign: "center",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#fc8955",
    width: getRealDP(240),
    height: getRealDP(100),
    borderRadius: getRealDP(8),
  }
});
