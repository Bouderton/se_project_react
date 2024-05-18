import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const currentTempUnit = useContext(CurrentTemperatureUnitContext);

  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  console.log(currentTempUnit);

  const weatherOptionUrl = weatherOption.url || "";
  return (
    <section className="weather">
      <p className="weather__info">
        {weatherTemp}°{currentTempUnit}
      </p>
      <img src={weatherOptionUrl} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
