import "./Header.css";
import avatar from "../../images/avatar-logo.svg";
import logo from "../../images/wtwr.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

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
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__button"
          >
            + Add New Clothes
          </button>
        </div>
        <Link
          to="/profile"
          style={{ textDecoration: "none", color: " inherit" }}
        >
          Terrence Tegegne
        </Link>
        <div>
          <img src={avatar} alt="avatar logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
