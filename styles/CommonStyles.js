import {StyleSheet} from "react-native";
import { getRealDP } from "../utils/adapaterUtil";

// const colors = ["#f6dae4", "#d4f0f7", "#d0d5f7", "#b8cfec"];
const colors1 = ["#fc8955", "#0583d2", "#4fd6f7", "#b8e3ff"];

const titleColor = "#fc8955";
const textColorBlue = "#0583d2";


module.exports = StyleSheet.create({
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
  },

  height36: {
    height: 36,
  },
  height54: {
    height: 54,
  },

  textColor: {
    color: titleColor,
  },
  textColorBlue: {
    color: textColorBlue,
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

});
