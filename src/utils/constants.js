export const weatherOptions = [
  {
    url: new URL("../images/day/day-sunny.svg", import.meta.url).href,
    day: true,
    type: "sunny",
  },
  {
    url: new URL("../images/day/day-cloudy.svg", import.meta.url).href,
    day: true,
    type: "cloudy",
  },
  {
    url: new URL("../images/day/day-rain.svg", import.meta.url).href,
    day: true,
    type: "rainy",
  },
  {
    url: new URL("../images/day/day-storm.svg", import.meta.url).href,
    day: true,
    type: "storm",
  },
  {
    url: new URL("../images/day/day-snow.svg", import.meta.url).href,
    day: true,
    type: "snowy",
  },
  {
    url: new URL("../images/day/day-fog.svg", import.meta.url).href,
    day: true,
    type: "fog",
  },
  {
    url: new URL("../images/night/night-moon.svg", import.meta.url).href,
    day: false,
    type: "moon",
  },
  {
    url: new URL("../images/night/night-cloudy.svg", import.meta.url).href,
    day: false,
    type: "cloudy",
  },
  {
    url: new URL("../images/night/night-rain.svg", import.meta.url).href,
    day: false,
    type: "rainy",
  },
  {
    url: new URL("../images/night/night-storm.svg", import.meta.url).href,
    day: false,
    type: "storm",
  },
  {
    url: new URL("../images/night/night-snow.svg", import.meta.url).href,
    day: false,
    type: "snowy",
  },
  {
    url: new URL("../images/night/night-fog.svg", import.meta.url).href,
    day: false,
    type: "fog",
  },
];
