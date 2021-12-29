import {StyleSheet} from "react-native";

const colors = ["#f6dae4", "#d4f0f7", "#d0d5f7", "#b8cfec"];
const colors1 = ["#fc8955", "#0583d2", "#4fd6f7", "#b8e3ff"];

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  mainContainer: {
    flex: 1,
    display: "flex",
    overflowX: "scroll",
  },
  controlPanel: {
    backgroundColor: "#b8e3ff",
    height: "100%",
  },
  textStyle: {
    fontSize: 16,
    padding: 10,
  },
  closePanel: {
    fontSize: 16,
    padding: 10,
    backgroundColor: "#cccccc",
  },
});
