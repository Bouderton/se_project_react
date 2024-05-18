import "./App.css";

// Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Profile from "../Profile/Profile";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

// Hooks and Routes
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Utils
import { getForecast, parseWeatherData } from "../../utils/weatherApi";
import api from "../../utils/api";
import * as auth from "../../utils/auth";

// Contexts
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  // const [token, setToken] = useState(null);

  const handleToggleSwitch = () => {
    setCurrentTempUnit(currentTempUnit === "F" ? "C" : "F");
  };

  // Modal Handlers
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

  const handleSignUpModal = () => {
    setActiveModal("signup");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit");
  };

  // Item Handlers

  const handleDeleteItem = (selectedCard) => {
    const token = localStorage.getItem("jwt");
    api
      .deleteItem(selectedCard._id, token)
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
    const token = localStorage.getItem("jwt");
    api
      .addItem({ name, weather, imageUrl }, token)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardLike = (id, isLiked) => {
    const token = localStorage.getItem("jwt");

    !isLiked
      ? api
          .addLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  // Authorization Handlers

  const handleSignUp = ({ email, password, name, avatar }) => {
    if (!email || !password) {
      return alert("Please enter an email and password");
    }
    auth
      .signUp({ email, password, name, avatar })
      .then(() => {
        handleSignUpModal({ email, password, name, avatar });
        handleCloseModal();
        setCurrentUser({ email, password, name, avatar });
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = ({ email, password }) => {
    auth
      .signIn({ email, password })
      .then((res) => {
        handleLoginModal({ email, password });
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleEditProfile = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    auth
      .editProfile({ name, avatar }, token)
      .then((res) => {
        handleEditProfileModal({ name, avatar });
        setCurrentUser(res);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  // useEffect APIs
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

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTempUnit, handleToggleSwitch }}
        >
          <Header
            onCreateModal={handleCreateModal}
            temp={temp}
            handleSignUpModal={handleSignUpModal}
            handleLoginModal={handleLoginModal}
            isLoggedIn={loggedIn}
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
                  onCardLike={handleCardLike}
                  loggedIn={loggedIn}
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
                  handleEditProfileModal={handleEditProfileModal}
                  setLoggedIn={setLoggedIn}
                  loggedIn={loggedIn}
                  onCardLike={handleCardLike}
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
          <EditProfileModal
            isOpen={activeModal === "edit"}
            handleCloseModal={handleCloseModal}
            handleEditProfile={handleEditProfile}
          />
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

// TODO LIST
// Register (DONE)
// Login and Sign Out (DONE)
// Protected APIs (DONE)
// Create item (DONE)
// Show items on the page (DONE)
// Delete item (DONE)
// Add Liked and Dislike features (uhhhhhhh)
// DYNAMIC WEATHER CARDS
