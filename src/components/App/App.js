import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import SideBar from "../Profile/SideBar";
import { useState, useEffect } from "react";
import { getForecast, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitch = () => {
    if (currentTempUnit === "C") setCurrentTempUnit("F");
    if (currentTempUnit === "F") setCurrentTempUnit("C");
  };

  useEffect(() => {
    getForecast()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        alert(`${err} Failed to get weather forecast`);
      });
  }, []);

  return (
    <div>
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitch }}
      >
        <Header onCreateModal={handleCreateModal} temp={temp} />
        <Switch>
          <Route exact path="/">
            <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
          </Route>
          <Route path="/profile">
            <SideBar />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm
            title="New Garmet"
            onClose={handleCloseModal}
            buttonText="Add garment"
          >
            <label className="modal__form-label">
              Name
              <input
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
                className="modal__form-input"
              />
            </label>
            <label className="modal__form-label">
              Image
              <input
                type="url"
                name="link"
                placeholder="Image URL"
                minLength="1"
                className="modal__form-input"
              />
            </label>
            <div className="modal__weather-type">
              <p className="modal__weather-title">Select Weather Type</p>
              <div>
                <input name="weather" type="radio" id="hot" value="hot" />
                <label className="modal__weather-option">Hot</label>
              </div>
              <div>
                <input name="weather" type="radio" id="warm" value="warm" />
                <label className="modal__weather-option">Warm</label>
              </div>
              <div>
                <input name="weather" type="radio" id="cold" value="cold" />
                <label className="modal__weather-option">Cold</label>
              </div>
            </div>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTempUnitContext.Provider>
    </div>
  );
}

export default App;
