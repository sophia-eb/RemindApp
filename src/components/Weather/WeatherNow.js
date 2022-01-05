import React, { useEffect, useState } from "react";

import { Image, ImageBackground, Text, View } from "react-native";

import commonStyles from "../../styles/CommonStyles";
import styles from "../../styles/WeatherList/WeatherContainer";
import { getSun } from "../../utils/apiUtils";
import { getLocationName } from "../../utils/getLocationName";

const WeatherNow = props => {
  const { weatherInfoNow, openControlPanel, cityId } = props;
  const [bakImage, setBakImage] = useState(require("../../../images/day.jpeg"));

  useEffect(() => {
    cityId && getSun(cityId).then(res => {
      if (res.data.code === "200") {
        const now = new Date().getTime();
        const sunrise = new Date(res.data.sunrise).getTime();
        const sunset = new Date(res.data.sunset).getTime();
        if ( sunrise < now < sunset) {
          setBakImage(require("../../../images/day.jpeg"));
        } else {
          setBakImage(require("../../../images/night.jpeg"));
        }
      }
    });
    return () => {};
  }, [cityId]);

  return (
    <View>
      <ImageBackground
        source={bakImage}
        resizeMode="cover"
        style={styles.bakImage}
      >
        <Text style={styles.cityPanelControl} onPress={openControlPanel}>➕ 城市列表</Text>
        <View>
          <View style={{ flexDirection: "row", marginHorizontal: "40%" }}>
            <Image
              source={require("../../../images/location.png")}
              style={{ width: 28, height: 28, marginRight: 6 }}
            />
            <Text style={[styles.centerText, commonStyles.fontSize18, commonStyles.textColor]}>
              {cityId && getLocationName(cityId)}
            </Text>
          </View>
          <Text style={[styles.centerTempText, commonStyles.textColor]}>
            {weatherInfoNow.temp}°C
          </Text>
          <Text style={[styles.centerText, commonStyles.fontSize18, commonStyles.textColor]}>
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
              降水
            </Text>
            <Text style={styles.wrapTextContent}>
              {weatherInfoNow.precip}毫米/小时
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


export default WeatherNow;
