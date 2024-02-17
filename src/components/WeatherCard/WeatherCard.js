import "./WeatherCard.css";

const WeatherCard = () => {
  return (
    <section className="weather">
      <div className="weather__info">75F</div>
      <img src="/images/day/day-sunny.svg" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
