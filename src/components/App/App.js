import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  const weatherTemp = "102F";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
    </div>
  );
}

export default App;
