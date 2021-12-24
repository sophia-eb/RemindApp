import React, { useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import { get7daysWeather } from "../../utils/apiUtils";
import styles from "../../styles/WeatherList/WeatherListStyles";
import CustomChart from "./CustomChart";
import ErrorMessage from "./ErrorMessage";


const Weather7days = () => {
  const defaultWeatherInfo7d = [{"fxDate":"2021-11-15","sunrise":"06:58","sunset":"16:59","moonrise":"15:16","moonset":"03:40","moonPhase":"盈凸月","moonPhaseIcon":"803","tempMax":"12","tempMin":"-1","iconDay":"101","textDay":"多云","iconNight":"150","textNight":"晴","wind360Day":"45","windDirDay":"东北风","windScaleDay":"1-2","windSpeedDay":"3","wind360Night":"0","windDirNight":"北风","windScaleNight":"1-2","windSpeedNight":"3","humidity":"65","precip":"0.0","pressure":"1020","vis":"25","cloud":"4","uvIndex":"3"},{"fxDate":"2021-11-16","sunrise":"07:00","sunset":"16:58","moonrise":"15:38","moonset":"04:40","moonPhase":"盈凸月","moonPhaseIcon":"803","tempMax":"13","tempMin":"0","iconDay":"100","textDay":"晴","iconNight":"101","textNight":"多云","wind360Day":"225","windDirDay":"西南风","windScaleDay":"1-2","windSpeedDay":"3","wind360Night":"225","windDirNight":"西南风","windScaleNight":"1-2","windSpeedNight":"3","humidity":"74","precip":"0.0","pressure":"1016","vis":"25","cloud":"1","uvIndex":"3"},{"fxDate":"2021-11-17","sunrise":"07:01","sunset":"16:57","moonrise":"16:01","moonset":"05:41","moonPhase":"盈凸月","moonPhaseIcon":"803","tempMax":"13","tempMin":"0","iconDay":"100","textDay":"晴","iconNight":"150","textNight":"晴","wind360Day":"225","windDirDay":"西南风","windScaleDay":"1-2","windSpeedDay":"3","wind360Night":"225","windDirNight":"西南风","windScaleNight":"1-2","windSpeedNight":"3","humidity":"56","precip":"0.0","pressure":"1009","vis":"25","cloud":"0","uvIndex":"3"},{"fxDate":"2021-11-18","sunrise":"06:58","sunset":"16:59","moonrise":"15:16","moonset":"03:40","moonPhase":"盈凸月","moonPhaseIcon":"803","tempMax":"10","tempMin":"-3","iconDay":"101","textDay":"多云","iconNight":"150","textNight":"晴","wind360Day":"45","windDirDay":"东北风","windScaleDay":"1-2","windSpeedDay":"3","wind360Night":"0","windDirNight":"北风","windScaleNight":"1-2","windSpeedNight":"3","humidity":"65","precip":"0.0","pressure":"1020","vis":"25","cloud":"4","uvIndex":"3"},{"fxDate":"2021-11-19","sunrise":"06:58","sunset":"16:59","moonrise":"15:16","moonset":"03:40","moonPhase":"盈凸月","moonPhaseIcon":"803","tempMax":"8","tempMin":"-5","iconDay":"101","textDay":"多云","iconNight":"150","textNight":"晴","wind360Day":"45","windDirDay":"东北风","windScaleDay":"1-2","windSpeedDay":"3","wind360Night":"0","windDirNight":"北风","windScaleNight":"1-2","windSpeedNight":"3","humidity":"65","precip":"0.0","pressure":"1020","vis":"25","cloud":"4","uvIndex":"3"}];

  const [weatherInfo7d, setWeatherInfo7d] = useState(defaultWeatherInfo7d);
  const [weatherInfo7dError, setWeatherInfo7dError] = useState(false);

  useEffect(() => {
    get7daysWeather().then((res) => {
      // console.log(res.data, "=======data=========");
      if (res.data.code === "200") {
        setWeatherInfo7dError(false);
        setWeatherInfo7d(res.data.daily);
      } else {
        setWeatherInfo7dError(true);
      }
    });
  }, []);

  let data = [];
  weatherInfo7d.forEach(item => {
    const re = new RegExp(".+-(.+-.+)");
    const time = item.fxDate.match(re);
    const maxTemp = Math.round(item.tempMax);
    const minTemp = Math.round(item.tempMin);
    data.push({hour: time[1], maxTemp: maxTemp, minTemp: minTemp});
  });

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>
        未来7天
      </Text>
      <View style={styles.chartContainer}>
        { weatherInfo7dError ? <ErrorMessage /> : <CustomChart data={data}/>}
      </View>
    </View>
  );
};

export default Weather7days;
