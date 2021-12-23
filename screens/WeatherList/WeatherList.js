import React, { useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import styles from "../../styles/WeatherList/WeatherListStyles";
import { getNowWeather } from "../../utils/apiUtils";
import Weather7days from "./Weather7days";
import WeatherHourly from "./WeatherHourly";
import WeatherNow from "./WeatherNow";
import ProfessionalInfo from "./ProfessionalInfo";
// import WeatherIcon from "../../icons/100.svg";


const WeatherList = () => {
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
    getNowWeather().then((res) => {
      // console.log(res.data, "=======data=========");
      if (res.data.code === 200) {
        setWeatherInfoNow(res.data.now);
      }
    });
    return () => {};
  }, []);

  return (
    <ScrollView style={styles.container}>
      <WeatherNow weatherInfoNow={weatherInfoNow}/>
      <WeatherHourly />
      <Weather7days />
      <ProfessionalInfo weatherInfoNow={weatherInfoNow}/>
    </ScrollView>
  );
};

export default WeatherList;
