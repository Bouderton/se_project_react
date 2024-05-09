import "./Main.css";
// import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useContext } from "react";
import { CurrentTempUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);

  const temp = weatherTemp?.temperature?.[currentTempUnit] || 999;

  const getWeatherType = (temp, currentTemperatureUnit) => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    }

    const weatherType = getWeatherType(temp, currentTemperatureUnit);

    const filteredCards = clothingItems.filter((item) => {
      return item.weather.toLowerCase() === weatherType;
    });

    return (
      <main className="main">
        <WeatherCard
          day={true}
          type="cloudy"
          weatherTemp={`${temp}°${currentTempUnit}`}
        />
        <section className="card__section" id="card-section">
          Today is {`${temp}°${currentTempUnit}`} / You may want to wear:
          <div className="card__items">
            {filteredCards.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            ))}
          </div>
        </section>
      </main>
    );
  };
}

export default Main;
