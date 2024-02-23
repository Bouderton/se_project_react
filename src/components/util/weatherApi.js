//API KEY
// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const latitude = 44.34;
const longitude = 10.99;
const APIkey = "6a90cb32554d48a125369911ffa482e2";
// function checkResponse(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     return Promise.reject(`Error: ${res.status}`);
//   }
// }

export const getForecast = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .then((data) => {
      return parseWeatherData(data);
    });
};

export const parseWeatherData = (data) => {
  console.log(data);
  const main = data.main;
  const temp = main && main.temp;
  console.log(temp);
  return temp;
};

const response = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10n",
    },
  ],
  base: "stations",
  main: {
    temp: 48.22,
    feels_like: 43.97,
    temp_min: 46.27,
    temp_max: 50.67,
    pressure: 1005,
    humidity: 72,
    sea_level: 1005,
    grnd_level: 919,
  },
  visibility: 10000,
  wind: {
    speed: 9.62,
    deg: 188,
    gust: 24.18,
  },
  rain: {
    "1h": 0.26,
  },
  clouds: {
    all: 100,
  },
  dt: 1708635747,
  sys: {
    type: 2,
    id: 2004688,
    country: "IT",
    sunrise: 1708581982,
    sunset: 1708620793,
  },
  timezone: 3600,
  id: 3163858,
  name: "Zocca",
  cod: 200,
};
