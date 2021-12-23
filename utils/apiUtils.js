import axios from "axios";

const nowWeatherUrl = "https://devapi.qweather.com/v7/weather/now?";
const publicId = "HE2112211554191382";
const key = "db11be461e024ddf890b8cf02baa548c";
// const location = "101010100"; //beijing
const location = "101190401"; //suzhou

export async function getNowWeather() {
  const url = nowWeatherUrl + "key=" + key + "&location=" + location;
  return axios({
    method: "get",
    url: url,
  });
}

const weatherUrl24h = "https://devapi.qweather.com/v7/weather/24h?";

export async function get24hWeather() {
  const location = "101190401"; //suzhou
  const url = weatherUrl24h + "key=" + key + "&location=" + location;

  return axios({
    method: "get",
    url: url,
  });
}

const weatherUrl3day = "https://devapi.qweather.com/v7/weather/3d?";
const weatherUrl7day = "https://devapi.qweather.com/v7/weather/7d?";

export async function get7daysWeather() {
  const location = "101190401"; //suzhou
  const url = weatherUrl3day + "key=" + key + "&location=" + location;

  return axios({
    method: "get",
    url: url,
  });
}
