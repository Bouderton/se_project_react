import "../Header/Header.css";
import logo from "../../images/wtwr.svg";
import mobileicon from "../../images/mobileicon.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderMobile = ({
  isLoggedIn,
  location,
  currentDate,
  currentUser,
  onCreateModal,
  handleSignUpModal,
  handleLoginModal,
}) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  function handleMobileMenu() {
    setMobileMenu(true);
  }

  function closeMobileMenu() {
    setMobileMenu(false);
  }

  return (
    <>
      {isLoggedIn === true ? (
        <>
          <header className="header__mobile">
            <div className="header__mobile-info">
              <div className="header__logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div>
                {currentDate}, {location}
              </div>
            </div>
            <div className="header__info-container">
              <ToggleSwitch />
              <button
                className="header__menu-icon"
                type="button"
                onClick={() => {
                  handleMobileMenu();
                }}
              >
                <img
                  className="header__menu-icon-image"
                  alt="menu icon"
                  src={mobileicon}
                />
              </button>
            </div>
          </header>
          <div
            className={`header__mobile-menu ${
              mobileMenu === true ? `opened` : ""
            }`}
          >
            <button
              type="text"
              className="header__mobile-close"
              onClick={closeMobileMenu}
            />
            <div className="header__mobile-menu-content">
              <img
                src={currentUser?.avatar}
                alt="avatar logo"
                className="header__avatar-img"
                style={{ width: "200px", height: "200px", margin: "0 auto" }}
              />
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {currentUser?.name}
              </Link>
              <button
                type="text"
                className="header__button"
                onClick={onCreateModal}
                style={{ color: "white", fontSize: "25px" }}
              >
                +Add New Clothes
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <header className="header__mobile">
            <div className="header__mobile-info">
              <div className="header__logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div>
                {currentDate}, {location}
              </div>
            </div>
            <div className="header__info-container">
              <ToggleSwitch />
              <button
                className="header__menu-icon"
                type="button"
                onClick={() => {
                  handleMobileMenu();
                }}
              >
                <img
                  className="header__menu-icon-image"
                  alt="menu icon"
                  src={mobileicon}
                />
              </button>
            </div>
          </header>
          {/* USE DAY/NIGHT CYCLE FOR MENU */}
          <div
            className={`header__mobile-menu ${
              mobileMenu === true ? `opened` : ""
            }`}
            style={{ height: "300px" }}
          >
            <button
              type="text"
              className="header__mobile-close"
              onClick={closeMobileMenu}
            />
            <div className="header__mobile-menu-content">
              <>
                <button
                  onClick={handleSignUpModal}
                  type="text"
                  className="header__button"
                  style={{
                    color: "white",
                    fontSize: "40px",
                    marginTop: "50px",
                  }}
                >
                  Sign Up
                </button>
                <button
                  onClick={handleLoginModal}
                  type="text"
                  className="header__button"
                  style={{
                    color: "white",
                    fontSize: "40px",
                    marginTop: "15px",
                  }}
                >
                  Log In
                </button>
              </>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeaderMobile;
