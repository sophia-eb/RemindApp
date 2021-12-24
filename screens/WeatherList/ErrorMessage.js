import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles/WeatherList/WeatherListStyles";


const ErrorMessage = () => {
  return (
    <>
      <Text style={styles.centerText}>
        ⚠️ 警报！警报！
      </Text>
      <Text style={styles.centerText}>
        有外星人入侵！图被抢走啦呜呜呜T_T
      </Text>
    </>
  );
};

export default ErrorMessage;
