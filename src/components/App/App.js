import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import { useState, useEffect } from "react";
import { getForecast, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTempUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
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
        <Header onCreateModal={handleCreateModal} temp={temp} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              clothingItems={clothingItems}
              onSelectCard={handleSelectedCard}
              handleCreateModal={handleCreateModal}
            />
          </Route>
        </Switch>
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
      </CurrentTempUnitContext.Provider>
    </div>
  );
}

export default App;
