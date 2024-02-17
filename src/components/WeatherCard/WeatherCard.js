import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("../../images/day/day-sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../../images/day/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../../images/day/day-rain.svg").default,
    day: true,
    type: "rainy",
  },
  {
    url: require("../../images/day/day-storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../../images/day/day-snow.svg").default,
    day: true,
    type: "snowy",
  },
  {
    url: require("../../images/day/day-fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    url: require("../../images/night/night-moon.svg").default,
    day: false,
    type: "moon",
  },
  {
    url: require("../../images/night/night-cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../../images/night/night-rain.svg").default,
    day: false,
    type: "rainy",
  },
  {
    url: require("../../images/night/night-storm.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../../images/night/night-snow.svg").default,
    day: false,
    type: "snowy",
  },
  {
    url: require("../../images/night/night-fog.svg").default,
    day: false,
    type: "fog",
  },
];

const WeatherCard = ({ day, type }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather">
      <div className="weather__info">75F</div>
      <img src={imageSrcUrl} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
