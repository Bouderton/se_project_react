import "./WeatherCard.css";
import { weatherIcons } from "../../utils/weatherIcons.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const WeatherCard = ({ weatherTemp = "", time, weatherCode }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  let imageUrl;
  const weatherOption = weatherIcons.find(() => {
    if (time === "Day") {
      switch (true) {
        case weatherCode >= 200 && weatherCode <= 232:
          imageUrl = Object.values(weatherIcons)[3].url;
          break;
        case weatherCode >= 300 && weatherCode <= 531:
          imageUrl = Object.values(weatherIcons)[2].url;
          break;
        case weatherCode >= 600 && weatherCode <= 622:
          imageUrl = Object.values(weatherIcons)[4].url;
          break;
        case weatherCode >= 701 && weatherCode <= 781:
          imageUrl = Object.values(weatherIcons)[5].url;
          break;
        case weatherCode >= 801 && weatherCode <= 804:
          imageUrl = Object.values(weatherIcons)[1].url;
          break;
        default:
          imageUrl = Object.values(weatherIcons)[0].url; // Default to sunny if no match
      }
      return imageUrl;
    } else {
      switch (true) {
        case weatherCode >= 200 && weatherCode <= 232:
          imageUrl = Object.values(weatherIcons)[9].url;
          break;
        case weatherCode >= 300 && weatherCode <= 531:
          imageUrl = Object.values(weatherIcons)[8].url;
          break;
        case weatherCode >= 600 && weatherCode <= 622:
          imageUrl = Object.values(weatherIcons)[10].url;
          break;
        case weatherCode >= 701 && weatherCode <= 781:
          imageUrl = Object.values(weatherIcons)[11].url;
          break;
        case weatherCode >= 801 && weatherCode <= 804:
          imageUrl = Object.values(weatherIcons)[7].url;
          break;
        default:
          imageUrl = Object.values(weatherIcons)[6].url; // Default to moon if no match
      }
      return imageUrl;
    }
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
