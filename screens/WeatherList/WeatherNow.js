import React, { useEffect, useState } from "react";

import { Image, ImageBackground, Text, View } from "react-native";

// import { getSun } from "../../utils/apiUtils";
// import Svg, { Path } from "react-native-svg";
import { CITY_LIST_OBJ } from "../../Constants";
import commonStyles from "../../styles/CommonStyles";
import styles from "../../styles/WeatherList/WeatherContent";
// import WeatherIcon from "../../icons/100.svg";

const WeatherNow = props => {
  const { weatherInfoNow, openControlPanel, cityId } = props;
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
  // console.log(weatherInfoNow.icon, "+++++++++++++++");

  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.bakImage}
      >
        <Text style={styles.cityPanelControl} onPress={openControlPanel}>➕ 城市列表</Text>
        <View>
          <View style={{ flexDirection: "row", marginHorizontal: "40%" }}>
            <Image
              source={require("../../images/location.png")}
              style={{ width: 28, height: 28, marginRight: 6 }}
            />
            <Text style={[styles.centerText, commonStyles.fontSize18, commonStyles.textColor]}>
              {CITY_LIST_OBJ[cityId]}
            </Text>
          </View>
          <Text style={[styles.centerTempText, commonStyles.textColor]}>
            {weatherInfoNow.temp}°C
          </Text>
          <Text style={[styles.centerText, commonStyles.fontSize18, commonStyles.textColor]}>
            {/*<View>*/}
            {/*  <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffffff" className="qi-100"*/}
            {/*       viewBox="0 0 16 16">*/}
            {/*    <Path*/}
            {/*      d="M8.005 4.5a3.5 3.5 0 1 1-3.5 3.5 3.504 3.504 0 0 1 3.5-3.5m0-1a4.5 4.5 0 1 0 4.5 4.5 4.5 4.5 0 0 0-4.5-4.5zm.001-.997a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 1 1 1 0v1.5a.5.5 0 0 1-.5.5z" />*/}
            {/*    <Path*/}
            {/*      d="M8.006 2.503a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 1 1 1 0v1.5a.5.5 0 0 1-.5.5zM3.765 4.255a.498.498 0 0 1-.353-.147L2.35 3.048a.5.5 0 0 1 .707-.707L4.12 3.4a.5.5 0 0 1-.354.854zM2.003 8.493h-1.5a.5.5 0 0 1 0-1h1.5a.5.5 0 0 1 0 1zm.691 5.303a.5.5 0 0 1-.354-.854l1.062-1.06a.5.5 0 0 1 .707.707l-1.062 1.06a.498.498 0 0 1-.353.147zm5.299 2.201a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5zm5.302-2.191a.498.498 0 0 1-.353-.147l-1.06-1.06a.5.5 0 1 1 .706-.707l1.06 1.06a.5.5 0 0 1-.353.854zm2.202-5.299h-1.5a.5.5 0 1 1 0-1h1.5a.5.5 0 0 1 0 1zm-3.252-4.242a.5.5 0 0 1-.354-.854l1.06-1.06a.5.5 0 0 1 .708.707l-1.06 1.06a.498.498 0 0 1-.354.147z" />*/}
            {/*  </Svg>*/}
            {/*</View>*/}
            {weatherInfoNow.text}
          </Text>
          <View style={[styles.wrapContainer, commonStyles.height36]}>
            <Text style={commonStyles.fontSize16}>
              体感
            </Text>
            <Text style={styles.wrapTextContent}>
              {weatherInfoNow.feelsLike}°C
            </Text>
          </View>
          <View style={[styles.wrapContainer, commonStyles.height36]}>
            <Text style={commonStyles.fontSize16}>
              风力
            </Text>
            <Text style={styles.wrapTextContent}>
              {weatherInfoNow.windDir} {weatherInfoNow.windScale}级
            </Text>
          </View>
          <View style={[styles.wrapContainer, commonStyles.height36]}>
            <Text style={commonStyles.fontSize16}>
              风速
            </Text>
            <Text style={styles.wrapTextContent}>
              {weatherInfoNow.windSpeed}公里/小时
            </Text>
          </View>
          <View style={[styles.wrapContainer, commonStyles.height36]}>
            <Text style={commonStyles.fontSize16}>
              湿度
            </Text>
            <Text style={styles.wrapTextContent}>
              {weatherInfoNow.humidity}%
            </Text>
          </View>
          <View style={[styles.wrapContainer, commonStyles.height36]}>
            <Text style={commonStyles.fontSize16}>
              当前小时累计降水量
            </Text>
            <Text style={styles.wrapTextContent}>
              {weatherInfoNow.precip}毫米
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


export default WeatherNow;
