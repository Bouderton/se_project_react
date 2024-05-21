import "./Main.css";
// import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  onSelectCard,
  clothingItems,
  onCardLike,
  loggedIn,
  getWeatherType,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === getWeatherType(temp);
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" weatherTemp={temp} />
      <section className="card__section" id="card-section">
        Today is {`${temp}°${currentTemperatureUnit}`} / You may want to wear:
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              onCardLike={onCardLike}
              loggedIn={loggedIn}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
