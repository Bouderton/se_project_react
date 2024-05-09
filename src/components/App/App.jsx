import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import { useState, useEffect } from "react";
import { getForecast, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTempUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import api from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

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

  const handleSignUp = () => {
    setActiveModal("signup");
  };

  const handleLogin = () => {
    setActiveModal("login");
  };

  const handleDeleteItem = (selectedCard) => {
    api
      .deleteItem(selectedCard)
      .then(() => {
        const postDelete = clothingItems.filter((card) => {
          return card._id !== selectedCard._id;
        });
        setClothingItems(postDelete);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleItemSubmit = ({ name, weather, imageUrl }) => {
    api
      .addItem({ name, weather, imageUrl })
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleToggleSwitch = () => {
    setCurrentTempUnit(currentTempUnit === "F" ? "C" : "F");
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

  useEffect(() => {
    api
      .getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  return (
    <div>
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitch }}
      >
        <Header
          onCreateModal={handleCreateModal}
          temp={temp}
          handleSignUp={handleSignUp}
          handleLogin={handleLogin}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
                handleCreateModal={handleCreateModal}
              />
            }
          />
        </Routes>
        <Footer />
        <AddItemModal
          isOpen={activeModal === "create"}
          handleCloseModal={handleCloseModal}
          handleAddItem={handleItemSubmit}
        />
        <ItemModal
          selectedCard={selectedCard}
          onClose={handleCloseModal}
          isOpen={activeModal === "preview"}
          deleteCard={handleDeleteItem}
        />
        <RegisterModal
          isOpen={activeModal === "signup"}
          handleCloseModal={handleCloseModal}
          handleSignUp={handleSignUp}
        />
        <LoginModal
          isOpen={activeModal === "login"}
          handleCloseModal={handleCloseModal}
          handleLogin={handleLogin}
        />
      </CurrentTempUnitContext.Provider>
    </div>
  );
}

export default App;
