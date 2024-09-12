import "../WeatherCard/WeatherCard.css";

const Weather = ({ weatherOption }) => {
  return (
    <img
      src={weatherOptionUrl}
      className="weather__image"
      alt="weather image"
    />
  );
};

export default Weather;
