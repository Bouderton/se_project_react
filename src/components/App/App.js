import logo from "../../images/logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import WeatherCard from "../WeatherCard/WeatherCard";

function App() {
  return (
    <div>
      <Header />
      <WeatherCard day={false} type="moon" />
      <Main />
    </div>
  );
}

export default App;
