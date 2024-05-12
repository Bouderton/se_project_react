import "./Header.css";
// import React from "react";
import avatar from "../../images/avatar-logo.svg";
import logo from "../../images/wtwr.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({
  onCreateModal,
  handleSignUpModal,
  handleLoginModal,
  isLoggedIn,
}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>{currentDate}, Las Vegas</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <div>
              <button
                type="text"
                className="header__button"
                onClick={onCreateModal}
              >
                +Add New Clothes
              </button>
            </div>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              {currentUser.name}
            </Link>
            <div>
              <img src={currentUser.avatar} alt="avatar logo" />
            </div>
          </>
        ) : (
          <>
            <button
              onClick={handleSignUpModal}
              type="text"
              className="header__button"
            >
              Sign Up
            </button>
            <button
              onClick={handleLoginModal}
              type="text"
              className="header__button"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
