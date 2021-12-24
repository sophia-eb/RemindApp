import axios from "axios";

const nowWeatherUrl = "https://devapi.qweather.com/v7/weather/now?";
const publicId = "HE2112211554191382";
const key = "db11be461e024ddf890b8cf02baa548c";
// const location = "101010100"; //beijing
// kaifeng 101180801
// shanghai 101020100
// shenzhen 101280601
// nanshan 101280604
// suzhou 101190401
const location = "101280601"; //shenzhen

export async function getNowWeather() {
  const url = nowWeatherUrl + "key=" + key + "&location=" + location;
  return axios({
    method: "get",
    url: url,
  });
}

const weatherUrl24h = "https://devapi.qweather.com/v7/weather/24h?";

export async function get24hWeather() {
  const url = weatherUrl24h + "key=" + key + "&location=" + location;

  return axios({
    method: "get",
    url: url,
  });
}

const weatherUrl3day = "https://devapi.qweather.com/v7/weather/3d?";
const weatherUrl7day = "https://devapi.qweather.com/v7/weather/7d?";

export async function get7daysWeather() {
  const url = weatherUrl7day + "key=" + key + "&location=" + location;

  return axios({
    method: "get",
    url: url,
  });
}

const weatherWarning = "https://devapi.qweather.com/v7/warning/now?";

export async function getWeatherWarning() {
  const url = weatherWarning + "key=" + key + "&location=" + location;

  return axios({
    method: "get",
    url: url,
  });
}

const livingIndices = "https://devapi.qweather.com/v7/indices/1d?";

export async function getLivingIndices() {
  const url = livingIndices + "key=" + key + "&location=" + location + "&type=1,3,5,8,9,11";

  return axios({
    method: "get",
    url: url,
  });
}

const sunAstronomy = "https://devapi.qweather.com/v7/astronomy/sun?";
const today = new Date();
const date = today.getFullYear() + today.getMonth() + today.getDate();

export async function getSun() {
  const url = sunAstronomy + "key=" + key + "&location=" + location + "&date=" + date;

  return axios({
    method: "get",
    url: url,
  });
}
