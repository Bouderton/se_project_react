export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "Hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "Warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "Cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "Cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "Hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "Cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  {
    url: require("../images/day/day-sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/day/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/day/day-rain.svg").default,
    day: true,
    type: "rainy",
  },
  {
    url: require("../images/day/day-storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../images/day/day-snow.svg").default,
    day: true,
    type: "snowy",
  },
  {
    url: require("../images/day/day-fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    url: require("../images/night/night-moon.svg").default,
    day: false,
    type: "moon",
  },
  {
    url: require("../images/night/night-cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/night-rain.svg").default,
    day: false,
    type: "rainy",
  },
  {
    url: require("../images/night/night-storm.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../images/night/night-snow.svg").default,
    day: false,
    type: "snowy",
  },
  {
    url: require("../images/night/night-fog.svg").default,
    day: false,
    type: "fog",
  },
];