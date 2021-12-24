import React, { useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import { getWeatherWarning } from "../../utils/apiUtils";
import styles from "../../styles/WeatherList/WeatherListStyles";


const WeatherWarning = () => {
  const defaultWarning = [
    {
      "id": "10101010020211009154607668935939",
      "sender": "北京市气象局",
      "pubTime": "2021-10-09T15:46+08:00",
      "title": "北京市气象台2021年10月09日15时40分发布大风蓝色预警信号",
      "startTime": "2021-10-09T15:40+08:00",
      "endTime": "2021-10-10T15:40+08:00",
      "status": "active",
      "level": "蓝色",
      "type": "11B06",
      "typeName": "大风",
      "text": "市气象台2021年10月9日15时40分发布大风蓝色预警信号：预计，9日22时至10日19时，本市大部分地区有4级左右偏北风，阵风6、7级，山区阵风可达8级左右，请注意防范。",
      "related": ""
    }
  ];
  const [weatherWarning, setWeatherWarning] = useState(defaultWarning);

  useEffect(() => {
    getWeatherWarning().then(res => {
      if (res.data.code === 200) {
        setWeatherWarning(res.data.warning);
      }
    });
  }, []);

  return (
    <View style={styles.cardContainer}>
      <Text>{weatherWarning.title}</Text>
      <Text>{weatherWarning.text}</Text>
    </View>
  );
};
