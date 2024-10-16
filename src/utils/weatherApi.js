import { checkResponse } from "./api";

const APIkey = "6a90cb32554d48a125369911ffa482e2";

export const getForecast = (lat, long) => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${APIkey}`
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
    },
  };
  return weather;
};
