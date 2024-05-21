import { checkResponse } from "./api";

const latitude = 36.17;
const longitude = -115.13;
const APIkey = "6a90cb32554d48a125369911ffa482e2";

export const getForecast = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temp = main && main.temp;
  const weather = {
    temperature: {
      F: `${Math.round(temp)}`,
      C: `${Math.round(temp - (32 * 5) / 9)}`,
      type: getWeatherType(temp),
    },
  };
  console.log(weather.temperature);
  return weather;
};

export const getWeatherType = (temp) => {
  if (temp >= 86) {
    return "hot";
  } else if (temp >= 66 && temp <= 85) {
    return "warm";
  } else if (temp <= 65) {
    return "cold";
  }
};
