import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, Image } from "react-native";
// import { Card } from 'react-native-elements';
import styles from "../../styles/WeatherList/WeatherListStyles";
import { getNowWeather, get24hWeather, get7daysWeather } from "../../utils/apiUtils";
import CustomChart from "./CustomChart";
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
  const defaultWeatherInfo24h = [{"fxTime":"2021-02-16T15:00+08:00","temp":"2","icon":"100","text":"晴","wind360":"335","windDir":"西北风","windScale":"3-4","windSpeed":"20","humidity":"11","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-25"},{"fxTime":"2021-02-16T16:00+08:00","temp":"1","icon":"100","text":"晴","wind360":"339","windDir":"西北风","windScale":"3-4","windSpeed":"24","humidity":"11","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-26"},{"fxTime":"2021-02-16T17:00+08:00","temp":"0","icon":"100","text":"晴","wind360":"341","windDir":"西北风","windScale":"4-5","windSpeed":"25","humidity":"11","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-26"},{"fxTime":"2021-02-16T18:00+08:00","temp":"0","icon":"150","text":"晴","wind360":"344","windDir":"西北风","windScale":"4-5","windSpeed":"25","humidity":"12","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T19:00+08:00","temp":"-2","icon":"150","text":"晴","wind360":"349","windDir":"西北风","windScale":"3-4","windSpeed":"24","humidity":"13","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T20:00+08:00","temp":"-3","icon":"150","text":"晴","wind360":"353","windDir":"北风","windScale":"3-4","windSpeed":"22","humidity":"14","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T21:00+08:00","temp":"-3","icon":"150","text":"晴","wind360":"355","windDir":"北风","windScale":"3-4","windSpeed":"20","humidity":"14","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T22:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"356","windDir":"北风","windScale":"3-4","windSpeed":"18","humidity":"16","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-27"},{"fxTime":"2021-02-16T23:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"356","windDir":"北风","windScale":"3-4","windSpeed":"18","humidity":"16","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T00:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"354","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"16","pop":"0","precip":"0.0","pressure":"1027","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T01:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"351","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"16","pop":"0","precip":"0.0","pressure":"1028","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T02:00+08:00","temp":"-4","icon":"150","text":"晴","wind360":"350","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"16","pop":"0","precip":"0.0","pressure":"1028","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T03:00+08:00","temp":"-5","icon":"150","text":"晴","wind360":"350","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"16","pop":"0","precip":"0.0","pressure":"1028","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T04:00+08:00","temp":"-5","icon":"150","text":"晴","wind360":"351","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"15","pop":"0","precip":"0.0","pressure":"1027","cloud":"0","dew":"-28"},{"fxTime":"2021-02-17T05:00+08:00","temp":"-5","icon":"150","text":"晴","wind360":"352","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"14","pop":"0","precip":"0.0","pressure":"1026","cloud":"0","dew":"-29"},{"fxTime":"2021-02-17T06:00+08:00","temp":"-5","icon":"150","text":"晴","wind360":"355","windDir":"北风","windScale":"3-4","windSpeed":"14","humidity":"16","pop":"0","precip":"0.0","pressure":"1025","cloud":"0","dew":"-27"},{"fxTime":"2021-02-17T07:00+08:00","temp":"-7","icon":"150","text":"晴","wind360":"359","windDir":"北风","windScale":"3-4","windSpeed":"16","humidity":"20","pop":"0","precip":"0.0","pressure":"1024","cloud":"0","dew":"-26"},{"fxTime":"2021-02-17T08:00+08:00","temp":"-5","icon":"100","text":"晴","wind360":"1","windDir":"北风","windScale":"3-4","windSpeed":"14","humidity":"19","pop":"0","precip":"0.0","pressure":"1023","cloud":"0","dew":"-26"},{"fxTime":"2021-02-17T09:00+08:00","temp":"-4","icon":"100","text":"晴","wind360":"356","windDir":"北风","windScale":"3-4","windSpeed":"14","humidity":"17","pop":"0","precip":"0.0","pressure":"1023","cloud":"0","dew":"-25"},{"fxTime":"2021-02-17T10:00+08:00","temp":"-1","icon":"100","text":"晴","wind360":"344","windDir":"西北风","windScale":"3-4","windSpeed":"14","humidity":"14","pop":"0","precip":"0.0","pressure":"1024","cloud":"0","dew":"-26"},{"fxTime":"2021-02-17T11:00+08:00","temp":"0","icon":"100","text":"晴","wind360":"333","windDir":"西北风","windScale":"3-4","windSpeed":"14","humidity":"12","pop":"0","precip":"0.0","pressure":"1024","cloud":"0","dew":"-26"},{"fxTime":"2021-02-17T12:00+08:00","temp":"1","icon":"100","text":"晴","wind360":"325","windDir":"西北风","windScale":"3-4","windSpeed":"14","humidity":"10","pop":"0","precip":"0.0","pressure":"1025","cloud":"16","dew":"-28"},{"fxTime":"2021-02-17T13:00+08:00","temp":"2","icon":"100","text":"晴","wind360":"319","windDir":"西北风","windScale":"3-4","windSpeed":"16","humidity":"8","pop":"0","precip":"0.0","pressure":"1025","cloud":"32","dew":"-29"},{"fxTime":"2021-02-17T14:00+08:00","temp":"2","icon":"100","text":"晴","wind360":"313","windDir":"西北风","windScale":"3-4","windSpeed":"16","humidity":"9","pop":"0","precip":"0.0","pressure":"1025","cloud":"48","dew":"-27"}];
  const defaultWeatherInfo7d = [{"fxDate":"2021-11-15","sunrise":"06:58","sunset":"16:59","moonrise":"15:16","moonset":"03:40","moonPhase":"盈凸月","moonPhaseIcon":"803","tempMax":"12","tempMin":"-1","iconDay":"101","textDay":"多云","iconNight":"150","textNight":"晴","wind360Day":"45","windDirDay":"东北风","windScaleDay":"1-2","windSpeedDay":"3","wind360Night":"0","windDirNight":"北风","windScaleNight":"1-2","windSpeedNight":"3","humidity":"65","precip":"0.0","pressure":"1020","vis":"25","cloud":"4","uvIndex":"3"},{"fxDate":"2021-11-16","sunrise":"07:00","sunset":"16:58","moonrise":"15:38","moonset":"04:40","moonPhase":"盈凸月","moonPhaseIcon":"803","tempMax":"13","tempMin":"0","iconDay":"100","textDay":"晴","iconNight":"101","textNight":"多云","wind360Day":"225","windDirDay":"西南风","windScaleDay":"1-2","windSpeedDay":"3","wind360Night":"225","windDirNight":"西南风","windScaleNight":"1-2","windSpeedNight":"3","humidity":"74","precip":"0.0","pressure":"1016","vis":"25","cloud":"1","uvIndex":"3"},{"fxDate":"2021-11-17","sunrise":"07:01","sunset":"16:57","moonrise":"16:01","moonset":"05:41","moonPhase":"盈凸月","moonPhaseIcon":"803","tempMax":"13","tempMin":"0","iconDay":"100","textDay":"晴","iconNight":"150","textNight":"晴","wind360Day":"225","windDirDay":"西南风","windScaleDay":"1-2","windSpeedDay":"3","wind360Night":"225","windDirNight":"西南风","windScaleNight":"1-2","windSpeedNight":"3","humidity":"56","precip":"0.0","pressure":"1009","vis":"25","cloud":"0","uvIndex":"3"},{"fxDate":"2021-11-18","sunrise":"06:58","sunset":"16:59","moonrise":"15:16","moonset":"03:40","moonPhase":"盈凸月","moonPhaseIcon":"803","tempMax":"10","tempMin":"-3","iconDay":"101","textDay":"多云","iconNight":"150","textNight":"晴","wind360Day":"45","windDirDay":"东北风","windScaleDay":"1-2","windSpeedDay":"3","wind360Night":"0","windDirNight":"北风","windScaleNight":"1-2","windSpeedNight":"3","humidity":"65","precip":"0.0","pressure":"1020","vis":"25","cloud":"4","uvIndex":"3"},{"fxDate":"2021-11-19","sunrise":"06:58","sunset":"16:59","moonrise":"15:16","moonset":"03:40","moonPhase":"盈凸月","moonPhaseIcon":"803","tempMax":"8","tempMin":"-5","iconDay":"101","textDay":"多云","iconNight":"150","textNight":"晴","wind360Day":"45","windDirDay":"东北风","windScaleDay":"1-2","windSpeedDay":"3","wind360Night":"0","windDirNight":"北风","windScaleNight":"1-2","windSpeedNight":"3","humidity":"65","precip":"0.0","pressure":"1020","vis":"25","cloud":"4","uvIndex":"3"}];

  const [weatherInfoNow, setWeatherInfoNow] = useState(defaultWeatherInfoNow);
  const [weatherInfo7d, setWeatherInfo7d] = useState(defaultWeatherInfo7d);
  const [weatherInfo7dError, setWeatherInfo7dError] = useState(false);
  const [weatherInfo24h, setWeatherInfo24h] = useState(defaultWeatherInfo24h);
  const [weatherInfo24hError, setWeatherInfo24hError] = useState(false);

  useEffect(() => {
    getNowWeather().then((res) => {
      // console.log(res.data, "=======data=========");
      if (res.data.code === 200) {
        setWeatherInfoNow(res.data.now);
      }
    });
    get24hWeather().then(res => {
      // console.log(res.data, "=======data=========");
      if (res.data.code === 200) {
        setWeatherInfo24hError(false);
        setWeatherInfo24h(res.data.hourly);
      } else {
        setWeatherInfo24hError(true);
      }
    });
    get7daysWeather().then((res) => {
      // console.log(res.data, "=======data=========");
      if (res.data.code === 200) {
        setWeatherInfo7dError(false);
        setWeatherInfo7d(res.data.daily);
      } else {
        setWeatherInfo7dError(true);
      }
    });
    return () => {};
  }, []);

  const RenderNowWeather = () => (
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

  const RenderError = () => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>
        逐小时预报
      </Text>
      <Text style={styles.centerText}>
        ⚠️ 警报！警报！
      </Text>
      <Text style={styles.centerText}>
        有外星人入侵！图被抢走啦呜呜呜T_T
      </Text>
    </View>
  );

  const RenderHourlyWeather = () => {
    let data = [];
    if (weatherInfo24hError) {
      return <RenderError />;
    }
    weatherInfo24h.forEach(item => {
      const re = new RegExp(".+T(.+):.+\\+.+");
      const time = item.fxTime.match(re);
      const temp1 = Math.round(item.temp);
      data.push({hour: time[1], temp: temp1});
    });
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>
          逐小时预报
        </Text>
        <CustomChart data={data}/>
      </View>
    );
  };

  const Render7daysWeather = () => {
    if (weatherInfo7dError) {
      return <RenderError />;
    }
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
          未来7天de天气是酱紫哒～o～
        </Text>
        <CustomChart data={data}/>
      </View>
    );
  };

  const RenderProfessionalData = () => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>
        专业数据
      </Text>
      <View style={styles.wrapContainer}>
        <View style={styles.wrapView}>
          <Text style={styles.wrapText}>
            大气压强
          </Text>
          <Text style={styles.wrapText}>
            {weatherInfoNow.pressure} hPa
          </Text>
        </View>
        <View style={styles.wrapView}>
          <Text style={styles.wrapText}>
            能见度
          </Text>
          <Text style={styles.wrapText}>
            {weatherInfoNow.vis} km
          </Text>
        </View>
      </View>
      <View style={styles.wrapContainer}>
        <View style={styles.wrapView}>
          <Text style={styles.wrapText}>
            云量
          </Text>
          <Text style={styles.wrapText}>
            {weatherInfoNow.cloud} %
          </Text>
        </View>
        <View style={styles.wrapView}>
          <Text style={styles.wrapText}>
            露点温度
          </Text>
          <Text style={styles.wrapText}>
            {weatherInfoNow.dew}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <RenderNowWeather />
      <RenderHourlyWeather />
      <Render7daysWeather />
      <RenderProfessionalData />
    </ScrollView>
  );
};

export default WeatherList;
