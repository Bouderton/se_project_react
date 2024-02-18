import "./Header.css";
import avatar from "../../images/avatar-logo.svg";
import logo from "../../images/wtwr.svg";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>Date, Location</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__button"
          >
            +Add New Clothes
          </button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img src={avatar} alt="avatar log" />
        </div>
      </div>
    </header>
  );
};

export default Header;
