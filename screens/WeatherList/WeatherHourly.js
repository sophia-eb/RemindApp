import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import styles from "../../styles/WeatherList/WeatherListStyles";
import CustomChart from "./CustomChart";
import { get24hWeather } from "../../utils/apiUtils";
import ErrorMessage from "./ErrorMessage";


const WeatherHourly = () => {
  const defaultWeatherInfo24h = [{"fxTime":"2021-02-16T15:00+08:00","temp":"2","icon":"100","text":"晴","wind360":"335","windDir":"西北风","windScale":"3-4","windSpeed":"20","humidity":"11","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-25"},{"fxTime":"2021-02-16T16:00+08:00","temp":"1","icon":"100","text":"晴","wind360":"339","windDir":"西北风","windScale":"3-4","windSpeed":"24","humidity":"11","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-26"},{"fxTime":"2021-02-16T17:00+08:00","temp":"0","icon":"100","text":"晴","wind360":"341","windDir":"西北风","windScale":"4-5","windSpeed":"25","humidity":"11","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-26"},{"fxTime":"2021-02-16T18:00+08:00","temp":"0","icon":"150","text":"晴","wind360":"344","windDir":"西北风","windScale":"4-5","windSpeed":"25","humidity":"12","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T19:00+08:00","temp":"-2","icon":"150","text":"晴","wind360":"349","windDir":"西北风","windScale":"3-4","windSpeed":"24","humidity":"13","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T20:00+08:00","temp":"-3","icon":"150","text":"晴","wind360":"353","windDir":"北风","windScale":"3-4","windSpeed":"22","humidity":"14","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T21:00+08:00","temp":"-3","icon":"150","text":"晴","wind360":"355","windDir":"北风","windScale":"3-4","windSpeed":"20","humidity":"14","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T22:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"356","windDir":"北风","windScale":"3-4","windSpeed":"18","humidity":"16","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T23:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"356","windDir":"北风","windScale":"3-4","windSpeed":"18","humidity":"16","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T00:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"354","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"16","pop":"0","precip":"0.0","pressure":"1027","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T01:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"351","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"16","pop":"0","precip":"0.0","pressure":"1028","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T02:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"350","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"16","pop":"0","precip":"0.0","pressure":"1028","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T03:00+08:00","temp":"-5","icon":"150","text":"晴","wind360":"350","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"16","pop":"0","precip":"0.0","pressure":"1028","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T04:00+08:00","temp":"-5","icon":"150","text":"晴","wind360":"351","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"15","pop":"0","precip":"0.0","pressure":"1027","cloud":"0","dew":"-28"},{"fxTime":"2021-02-17T05:00+08:00","temp":"-5","icon":"150","text":"晴","wind360":"352","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"14","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-29"},{"fxTime":"2021-02-17T06:00+08:00","temp":"-5","icon":"150","text":"晴","wind360":"355","windDir":"北风","windScale":"3-4","windSpeed":"14","humidity":"16","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T07:00+08:00","temp":"-7","icon":"150","text":"晴","wind360":"359","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"20","pop":"0","precip":"0.0","pressure":"1024","cloud":"0","dew":"-26"},{"fxTime":"2021-02-17T08:00+08:00","temp":"-5","icon":"100","text":"晴","wind360":"1","windDir":"北风","windScale":"3-4","windSpeed":"14","humidity":"19","pop":"0","precip":"0.0","pressure":"1023","cloud":"0","dew":"-26"},{"fxTime":"2021-02-17T09:00+08:00","temp":"-4","icon":"100","text":"晴","wind360":"356","windDir":"北风","windScale":"3-4","windSpeed":"14","humidity":"17","pop":"0","precip":"0.0","pressure":"1023","cloud":"0","dew":"-25"},{"fxTime":"2021-02-17T10:00+08:00","temp":"-1","icon":"100","text":"晴","wind360":"344","windDir":"西北风","windScale":"3-4","windSpeed":"14","humidity":"14","pop":"0","precip":"0.0","pressure":"1024","cloud":"0","dew":"-26"},{"fxTime":"2021-02-17T11:00+08:00","temp":"0","icon":"100","text":"晴","wind360":"333","windDir":"西北风","windScale":"3-4","windSpeed":"14","humidity":"12","pop":"0","precip":"0.0","pressure":"1024","cloud":"0","dew":"-26"},{"fxTime":"2021-02-17T12:00+08:00","temp":"1","icon":"100","text":"晴","wind360":"325","windDir":"西北风","windScale":"3-4","windSpeed":"14","humidity":"10","pop":"0","precip":"0.0","pressure":"1025","cloud":"16","dew":"-28"},{"fxTime":"2021-02-17T13:00+08:00","temp":"2","icon":"100","text":"晴","wind360":"319","windDir":"西北风","windScale":"3-4","windSpeed":"16","humidity":"8","pop":"0","precip":"0.0","pressure":"1025","cloud":"32","dew":"-29"},{"fxTime":"2021-02-17T14:00+08:00","temp":"2","icon":"100","text":"晴","wind360":"313","windDir":"西北风","windScale":"3-4","windSpeed":"16","humidity":"9","pop":"0","precip":"0.0","pressure":"1025","cloud":"48","dew":"-27"}];

  const [weatherInfo24h, setWeatherInfo24h] = useState(defaultWeatherInfo24h);
  const [weatherInfo24hError, setWeatherInfo24hError] = useState(false);

  useEffect(() => {
    get24hWeather().then(res => {
      // console.log(res.data, "=======data=========");
      if (res.data.code === "200") {
        setWeatherInfo24hError(false);
        setWeatherInfo24h(res.data.hourly);
      } else {
        setWeatherInfo24hError(true);
      }
    });
    return () => {};
  }, []);

  let data = [];
  weatherInfo24h.forEach(item => {
    const re = new RegExp(".+T(.+):.+\\+.+");
    const time = item.fxTime.match(re);
    const temp1 = Math.round(item.temp);
    data.push({hour: time[1], temp: temp1});
  });

  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.cardTitle}>
          33提醒你
        </Text>
        <Image
          source={require("../../images/heart.png")}
          style={{ width: 20, height: 20, marginTop: 6, marginHorizontal: 4 }}
        />
        <Text style={styles.cardTitle}>
          逐小时预报
        </Text>
      </View>
      <View style={styles.chartContainer}>
        { weatherInfo24hError ? <ErrorMessage /> : <CustomChart data={data}/>}
      </View>
    </View>
  );
};

export default WeatherHourly;
