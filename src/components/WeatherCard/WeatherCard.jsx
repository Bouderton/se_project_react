import "./WeatherCard.css";
import Weather from "../Weather/Weather.jsx";
import { weatherOptions } from "../../utils/constants.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const WeatherCard = ({ weatherTemp = "", time, weatherCode }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  let imageUrl;
  const weatherOption = weatherOptions.find(() => {
    switch (true) {
      case weatherCode >= 200 && weatherCode <= 232:
        imageUrl = Object.values(weatherOptions)[3].url;
        break;
      case weatherCode >= 300 && weatherCode <= 321:
        imageUrl = Object.values(weatherOptions)[2].url;
        break;
      case weatherCode >= 500 && weatherCode <= 531:
        imageUrl = Object.values(weatherOptions)[8].url;
        break;
      case weatherCode >= 600 && weatherCode <= 622:
        imageUrl = Object.values(weatherOptions)[4].url;
        break;
      case weatherCode >= 701 && weatherCode <= 781:
        imageUrl = Object.values(weatherOptions)[5].url;
        break;
      case weatherCode === 800:
        imageUrl = time ? "sunny" : "moon";
        break;
      case weatherCode >= 801 && weatherCode <= 804:
        imageUrl = Object.values(weatherOptions)[1].url;
        break;
      default:
        imageUrl = Object.values(weatherOptions)[0].url; // Default to sunny if no match
    }
    return imageUrl;
  });

  return (
    <section className={time === "Day" ? "weather day" : "weather night"}>
      <p className="weather__info">
        {weatherTemp}°{currentTemperatureUnit}
      </p>
      <img src={imageUrl} className="weather__image" alt="weather image" />
    </section>
  );
};

export default WeatherCard;
