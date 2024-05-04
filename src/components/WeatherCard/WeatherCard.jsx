import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const weatherOptionUrl = weatherOption.url || "";
  return (
    <section className="weather">
      <div className="weather__info">{weatherTemp}</div>
      <img src={weatherOptionUrl} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
