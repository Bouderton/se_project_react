import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useMemo, useContext } from "react";
import { LoadingContext } from "../../contexts/LoadingContext";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  onSelectCard,
  clothingItems,
  onCardLike,
  loggedIn,
  time,
  weatherCode,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const isLoading = useContext(LoadingContext);

  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const tempF = weatherTemp?.temperature?.F;

  const weatherType = useMemo(() => {
    if (tempF >= 86) {
      return "hot";
    } else if (tempF >= 66 && tempF <= 85) {
      return "warm";
    } else if (tempF <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard weatherTemp={temp} time={time} weatherCode={weatherCode} />
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
