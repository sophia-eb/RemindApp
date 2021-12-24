import React, { useEffect, useState } from "react";
import styles from "../../styles/WeatherList/WeatherListStyles";
import { ImageBackground, Text, View } from "react-native";
// import { getSun } from "../../utils/apiUtils";
// import { SvgUri } from "react-native-svg";
// import WeatherIcon from "../../icons/100.svg";

const WeatherNow = props => {
  const { weatherInfoNow } = props;
  // const [bakImage, setBakImage] = useState("");

  let image = require("../../images/day.jpeg");

  // useEffect(() => {
  //   getSun().then(res => {
  //     console.log(res.data, "===============data============");
  //     if (res.data.code === "200") {
  //       if (new Date().getDate())
  //       setBakImage(require("../../images/day.jpeg"));
  //       setBakImage(require("../../images/night.jpeg"));
  //     }
  //   });
  // });

  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.bakImage}
      >
        <View>
          <Text style={styles.centerTempText}>
            {weatherInfoNow.temp}°C
          </Text>
          <Text style={styles.centerText}>
            {/*<WeatherIcon />;*/}
            {/*<SvgUri*/}
            {/*  width="100%"*/}
            {/*  height="100%"*/}
            {/*  uri={require("../../icons/100.svg")}*/}
            {/*/>*/}
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
      </ImageBackground>
    </View>
  );
};


export default WeatherNow;
