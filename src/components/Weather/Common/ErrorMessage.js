import React from "react";

import { Text } from "react-native";

import commonStyles from "../../../styles/CommonStyles";
import styles from "../../../styles/WeatherList/WeatherContainer";

const ErrorMessage = () => {
  return (
    <>
      <Text style={[styles.centerText, commonStyles.fontSize18, commonStyles.textColor]}>
        ⚠️ 警报！警报！
      </Text>
      <Text style={[styles.centerText, commonStyles.fontSize18, commonStyles.textColor]}>
        有外星人入侵！图被抢走啦呜呜呜T_T
      </Text>
    </>
  );
};

export default ErrorMessage;
