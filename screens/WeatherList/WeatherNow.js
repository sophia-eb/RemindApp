import React, { useEffect, useState } from "react";
import styles from "../../styles/WeatherList/WeatherListStyles";
import { Text, View } from "react-native";


const WeatherNow = props => {
  const { weatherInfoNow } = props;

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.centerTempText}>
        {weatherInfoNow.temp}°C
      </Text>
      <Text style={styles.centerText}>
        {/*<WeatherIcon />;*/}
        {weatherInfoNow.text}
      </Text>
      <View style={styles.wrapContainer}>
        <Text style={styles.wrapTextTitle}>
          体感
        </Text>
        <Text style={styles.wrapTextContent}>
          {weatherInfoNow.feelsLike}°C
        </Text>
      </View>
      <View style={styles.wrapContainer}>
        <Text style={styles.wrapTextTitle}>
          风力
        </Text>
        <Text style={styles.wrapTextContent}>
          {weatherInfoNow.windDir} {weatherInfoNow.windScale}级
        </Text>
      </View>
      <View style={styles.wrapContainer}>
        <Text style={styles.wrapTextTitle}>
          风速
        </Text>
        <Text style={styles.wrapTextContent}>
          {weatherInfoNow.windSpeed}公里/小时
        </Text>
      </View>
      <View style={styles.wrapContainer}>
        <Text style={styles.wrapTextTitle}>
          湿度
        </Text>
        <Text style={styles.wrapTextContent}>
          {weatherInfoNow.humidity}%
        </Text>
      </View>
      {/*<View style={styles.wrapContainer}>*/}
      {/*  <Text style={styles.wrapText}>*/}
      {/*    当前小时累计降水量*/}
      {/*  </Text>*/}
      {/*  <Text style={styles.wrapText}>*/}
      {/*    {weatherInfoNow.precip}毫米*/}
      {/*  </Text>*/}
      {/*</View>*/}
    </View>
  );
};


export default WeatherNow;
