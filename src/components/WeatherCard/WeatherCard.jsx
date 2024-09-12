import "./WeatherCard.css";
import Weather from "../Weather/Weather.jsx";
import { weatherOptions } from "../../utils/constants.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const WeatherCard = ({ day, type, weatherTemp = "", time }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const weatherOptionUrl = weatherOption.url || "";

  return (
    <section className={time === "Day" ? "weather day" : "weather night"}>
      <p className="weather__info">
        {weatherTemp}°{currentTemperatureUnit}
      </p>
      <img
        src={weatherOptionUrl}
        className="weather__image"
        alt="weather image"
      />
    </section>
  );
};

export default WeatherCard;
