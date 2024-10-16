import { checkResponse } from "./api";

let latitude;
let longitude;

const options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

// window.location.reload(true);
function success(pos) {
  const crd = pos.coords;
  latitude = Math.ceil(crd.latitude * 100) / 100;
  longitude = Math.ceil(crd.longitude * 100) / 100;
  const hasReloaded = localStorage.getItem("hasReloaded");
  if (!hasReloaded) {
    localStorage.setItem("hasReloaded", true);
    window.location.reload();
  }
}

function error() {
  latitude = 36.17;
  longitude = -115.14;
}

navigator.geolocation.getCurrentPosition(success, error, options);

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
    },
  };
  return weather;
};
