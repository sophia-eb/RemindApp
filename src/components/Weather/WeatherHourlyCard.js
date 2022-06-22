import React, { useEffect, useState } from "react";

import { FlatList, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

import styles from "../../styles/WeatherList/WeatherContainer";
import { get24hWeather } from "../../utils/apiUtils";
import { weatherIconObj } from "../../utils/weatherIconObj";
import CardTitle from "./Common/CardTitle";
import ErrorMessage from "./Common/ErrorMessage";

const WeatherHourlyCard = props => {
  const defaultWeatherInfo24h = [{"fxTime":"2021-02-16T15:00+08:00","temp":"2","icon":"100","text":"晴","wind360":"335","windDir":"西北风","windScale":"3-4","windSpeed":"20","humidity":"11","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-25"},{"fxTime":"2021-02-16T16:00+08:00","temp":"1","icon":"100","text":"晴","wind360":"339","windDir":"西北风","windScale":"3-4","windSpeed":"24","humidity":"11","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-26"},{"fxTime":"2021-02-16T17:00+08:00","temp":"0","icon":"100","text":"晴","wind360":"341","windDir":"西北风","windScale":"4-5","windSpeed":"25","humidity":"11","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-26"},{"fxTime":"2021-02-16T18:00+08:00","temp":"0","icon":"150","text":"晴","wind360":"344","windDir":"西北风","windScale":"4-5","windSpeed":"25","humidity":"12","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T19:00+08:00","temp":"-2","icon":"150","text":"晴","wind360":"349","windDir":"西北风","windScale":"3-4","windSpeed":"24","humidity":"13","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T20:00+08:00","temp":"-3","icon":"150","text":"晴","wind360":"353","windDir":"北风","windScale":"3-4","windSpeed":"22","humidity":"14","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T21:00+08:00","temp":"-3","icon":"150","text":"晴","wind360":"355","windDir":"北风","windScale":"3-4","windSpeed":"20","humidity":"14","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T22:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"356","windDir":"北风","windScale":"3-4","windSpeed":"18","humidity":"16","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T23:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"356","windDir":"北风","windScale":"3-4","windSpeed":"18","humidity":"16","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T00:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"354","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"16","pop":"0","precip":"0.0","pressure":"1027","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T01:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"351","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"16","pop":"0","precip":"0.0","pressure":"1028","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T02:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"350","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"16","pop":"0","precip":"0.0","pressure":"1028","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T03:00+08:00","temp":"-5","icon":"150","text":"晴","wind360":"350","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"16","pop":"0","precip":"0.0","pressure":"1028","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T04:00+08:00","temp":"-5","icon":"150","text":"晴","wind360":"351","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"15","pop":"0","precip":"0.0","pressure":"1027","cloud":"0","dew":"-28"},{"fxTime":"2021-02-17T05:00+08:00","temp":"-5","icon":"150","text":"晴","wind360":"352","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"14","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-29"},{"fxTime":"2021-02-17T06:00+08:00","temp":"-5","icon":"150","text":"晴","wind360":"355","windDir":"北风","windScale":"3-4","windSpeed":"14","humidity":"16","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T07:00+08:00","temp":"-7","icon":"150","text":"晴","wind360":"359","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"20","pop":"0","precip":"0.0","pressure":"1024","cloud":"0","dew":"-26"},{"fxTime":"2021-02-17T08:00+08:00","temp":"-5","icon":"100","text":"晴","wind360":"1","windDir":"北风","windScale":"3-4","windSpeed":"14","humidity":"19","pop":"0","precip":"0.0","pressure":"1023","cloud":"0","dew":"-26"},{"fxTime":"2021-02-17T09:00+08:00","temp":"-4","icon":"100","text":"晴","wind360":"356","windDir":"北风","windScale":"3-4","windSpeed":"14","humidity":"17","pop":"0","precip":"0.0","pressure":"1023","cloud":"0","dew":"-25"},{"fxTime":"2021-02-17T10:00+08:00","temp":"-1","icon":"100","text":"晴","wind360":"344","windDir":"西北风","windScale":"3-4","windSpeed":"14","humidity":"14","pop":"0","precip":"0.0","pressure":"1024","cloud":"0","dew":"-26"},{"fxTime":"2021-02-17T11:00+08:00","temp":"0","icon":"100","text":"晴","wind360":"333","windDir":"西北风","windScale":"3-4","windSpeed":"14","humidity":"12","pop":"0","precip":"0.0","pressure":"1024","cloud":"0","dew":"-26"},{"fxTime":"2021-02-17T12:00+08:00","temp":"1","icon":"100","text":"晴","wind360":"325","windDir":"西北风","windScale":"3-4","windSpeed":"14","humidity":"10","pop":"0","precip":"0.0","pressure":"1025","cloud":"16","dew":"-28"},{"fxTime":"2021-02-17T13:00+08:00","temp":"2","icon":"100","text":"晴","wind360":"319","windDir":"西北风","windScale":"3-4","windSpeed":"16","humidity":"8","pop":"0","precip":"0.0","pressure":"1025","cloud":"32","dew":"-29"},{"fxTime":"2021-02-17T14:00+08:00","temp":"2","icon":"100","text":"晴","wind360":"313","windDir":"西北风","windScale":"3-4","windSpeed":"16","humidity":"9","pop":"0","precip":"0.0","pressure":"1025","cloud":"48","dew":"-27"}];

  const [weatherInfo24h, setWeatherInfo24h] = useState(defaultWeatherInfo24h);
  const [weatherInfo24hError, setWeatherInfo24hError] = useState(false);

  useEffect(() => {
    props.cityId && get24hWeather(props.cityId).then(res => {
      // console.log(res.data, "=======data=========");
      if (res.data.code === "200") {
        setWeatherInfo24hError(false);
        setWeatherInfo24h(res.data.hourly);
      } else {
        setWeatherInfo24hError(true);
      }
    });
    return () => {};
  }, [props.cityId]);

  let data = [];
  weatherInfo24h.forEach(item => {
    const re = new RegExp(".+T(.+):.+\\+.+");
    const time = item.fxTime.match(re);
    const temp1 = Math.round(item.temp);
    data.push({hour: time[1], icon: item.icon, temp: temp1});
  });

  const renderSearchItem = ({ item }) => (
    <View style={styles.tempCardContent} key={`temp-${item.hour}`}>
      <Text>{`${item.hour}:00`}</Text>
      { weatherIconObj[item?.icon]
        ? <SvgXml width="30" height="30" xml={weatherIconObj[item?.icon]} />
        : <SvgXml width="30" height="30" xml={weatherIconObj[9999]} />}
      <Text>{`${item.temp}°C`}</Text>
    </View>
  );

  return (
    <View style={styles.cardContainer}>
      { weatherInfo24hError || data?.length < 1 ?
        <ErrorMessage /> :
        <>
          <CardTitle cardTitleContext={"逐小时预报"}/>
          <View style={[styles.chartContainer, styles.tempCard]}>
            <FlatList
              key={"search-city"}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              data={data}
              renderItem={renderSearchItem}
            />
          </View>
        </>
      }
    </View>
  );
};

export default WeatherHourlyCard;
