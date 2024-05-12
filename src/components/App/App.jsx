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

// Hooks and Routes
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Utils
import { getForecast, parseWeatherData } from "../../utils/weatherApi";
import api from "../../utils/api";
import * as auth from "../../utils/auth";
// import { setToken, getToken } from "../../utils/token";

// Contexts
import { CurrentTempUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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

  // Item Handlers

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

  // Authorization Handlers

  const handleSignUp = ({ email, password, name, avatar }) => {
    if (!email || !password) {
      return alert("Please enter an email and password");
    }
    auth
      .signUp({ email, password, name, avatar })
      .then(() => {
        // setToken(data.jwt);
        // setUserData(data.user);
        handleSignUpModal({ email, password, name, avatar });
        handleCloseModal();
        setCurrentUser({ email, password, name, avatar });
        console.log(currentUser);
        setLoggedIn(true);
        alert("Sign Up Successful. Please Log In");
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = ({ email, password }) => {
    auth.signIn({ email, password }).then((res) => {
      handleLoginModal({ email, password });
      localStorage.setItem("jwt", res.token);
      handleCloseModal();
      setLoggedIn(true);
    });
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
        // console.log(items);
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
  });

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTempUnitContext.Provider
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

// TODO LIST
// Register (DONE)
// Login
// Protected Routes
// Create item
// Show items on the page
// Delete item
