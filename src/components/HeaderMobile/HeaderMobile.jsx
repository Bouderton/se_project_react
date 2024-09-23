import "../Header/Header.css";
import logo from "../../images/wtwr.svg";
import mobileicon from "../../images/mobileicon.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const HeaderMobile = ({ isLoggedIn, location, currentDate }) => {
  return (
    <>
      <header className="header mobile">
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
          <button className="header__menu-icon" type="button">
            <img
              className="header__menu-icon-image"
              alt="menu icon"
              src={mobileicon}
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
