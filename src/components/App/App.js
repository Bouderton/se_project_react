import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { useState, useEffect } from "react";
import { getForecast } from "../util/weatherApi";
import { parseWeatherData } from "../util/weatherApi";

function App() {
  const weatherTemp = "60F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
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

  useEffect(() => {
    getForecast().then((data) => {
      console.log(data);
      parseWeatherData(data);
    });
  }, []);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garmet" onClose={handleCloseModal}>
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
              <input type="radio" id="hot" value="hot" />
              <label className="modal__weather-option">Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label className="modal__weather-option">Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
              <label className="modal__weather-option">Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
