export const weatherOptions = [
  {
    url: new URL("../images/day/sunny.svg", import.meta.url).href,
    day: true,
    type: "sunny",
  },
  {
    url: new URL("../images/day/cloudy.svg", import.meta.url).href,
    day: true,
    type: "cloudy",
  },
  {
    url: new URL("../images/day/rainy.svg", import.meta.url).href,
    day: true,
    type: "rainy",
  },
  {
    url: new URL("../images/day/stormy.svg", import.meta.url).href,
    day: true,
    type: "storm",
  },
  {
    url: new URL("../images/day/snowy.svg", import.meta.url).href,
    day: true,
    type: "snowy",
  },
  {
    url: new URL("../images/day/foggy.svg", import.meta.url).href,
    day: true,
    type: "fog",
  },
  {
    url: new URL("../images/night/moon.svg", import.meta.url).href,
    day: false,
    type: "moon",
  },
  {
    url: new URL("../images/night/cloudy-night.svg", import.meta.url).href,
    day: false,
    type: "cloudy",
  },
  {
    url: new URL("../images/night/rainy-night.svg", import.meta.url).href,
    day: false,
    type: "rainy",
  },
  {
    url: new URL("../images/night/stormy-night.svg", import.meta.url).href,
    day: false,
    type: "storm",
  },
  {
    url: new URL("../images/night/snowy-night.svg", import.meta.url).href,
    day: false,
    type: "snowy",
  },
  {
    url: new URL("../images/night/foggy-night.svg", import.meta.url).href,
    day: false,
    type: "fog",
  },
];
