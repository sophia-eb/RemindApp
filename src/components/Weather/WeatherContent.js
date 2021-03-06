import React, { useEffect, useState } from "react";

import { Text, ScrollView, View, TouchableOpacity, Image } from "react-native";

import { ROUTES } from "../../../Constants";
import styles from "../../styles/WeatherList/WeatherContainer";
import { getNowWeather } from "../../utils/apiUtils";
import LivingIndices from "./LivingIndices";
import ProfessionalInfo from "./ProfessionalInfo";
import Weather7days from "./Weather7days";
// import WeatherHourly from "./WeatherHourly";
import WeatherHourlyCard from "./WeatherHourlyCard";
import WeatherNow from "./WeatherNow";


const WeatherContent = props => {
  const {navigation, openControlPanel, displayCity} = props;

  const defaultWeatherInfoNow = {
    "cloud": "0",
    "dew": "4",
    "feelsLike": "13",
    "humidity": "38",
    "icon": "100",
    "obsTime": "2021-12-21T16:11+08:00",
    "precip": "0.0",
    "pressure": "1017",
    "temp": "16",
    "text": "晴",
    "vis": "10",
    "wind360": "270",
    "windDir": "西风",
    "windScale": "2",
    "windSpeed": "11"
  };

  const [weatherInfoNow, setWeatherInfoNow] = useState(defaultWeatherInfoNow);

  useEffect(() => {
    displayCity && getNowWeather(displayCity).then((res) => {
      // console.log(res.data, "=======data=========");
      if (res.data.code === "200") {
        setWeatherInfoNow(res.data.now);
      }
    });
    return () => {};
  }, [displayCity]);

  const navigateToReward = () => {
    navigation.navigate(ROUTES.REWARD_AREA, {screen: ROUTES.REWARD_AREA});
  };

  return (
    <ScrollView style={styles.container}>
      <WeatherNow
        weatherInfoNow={weatherInfoNow}
        openControlPanel={openControlPanel}
        cityId={displayCity}
      />
      {/*<WeatherHourly cityId={displayCity}/>*/}
      <WeatherHourlyCard cityId={displayCity}/>
      <Weather7days cityId={displayCity}/>
      <LivingIndices cityId={displayCity}/>
      <ProfessionalInfo weatherInfoNow={weatherInfoNow}/>
      <TouchableOpacity style={styles.cardContainer} onPress={() => navigateToReward()}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../../images/reward.png")}
            style={{ width: 65 }}
          />
          <Text style={{ paddingVertical: 24, paddingLeft: 10 }}>作者辛苦啦，打赏一下吧^^</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default WeatherContent;
