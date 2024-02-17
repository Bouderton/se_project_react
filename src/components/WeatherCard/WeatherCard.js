import "./WeatherCard.css";

const weatherOptions = [
  { url: "/images/day/day-sunny.svg", day: true, type: "sunny" },
  { url: "/images/day/day-cloudy.svg", day: true, type: "cloudy" },
  { url: "/images/day/day-rain.svg", day: true, type: "rainy" },
  { url: "/images/day/day-storm.svg", day: true, type: "storm" },
  { url: "/images/day/day-snow.svg", day: true, type: "snowy" },
  { url: "/images/day/day-fog.svg", day: true, type: "fog" },
  { url: "/images/night/night-moon", day: false, type: "moon" },
  { url: "/images/night/night-cloudy", day: false, type: "cloudy" },
  { url: "/images/night/night-rain", day: false, type: "rainy" },
  { url: "/images/night/night-storm", day: false, type: "storm" },
  { url: "/images/night/night-snow", day: false, type: "snowy" },
  { url: "/images/night/night-fog", day: false, type: "fog" },
];

const WeatherCard = ({ day, type }) => {
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  return (
    <section className="weather">
      <div className="weather__info">75F</div>
      <img src="/images/day/day-sunny.svg" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
