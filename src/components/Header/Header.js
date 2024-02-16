import "./Header.css";
import avatar from "../../images/avatar-logo.svg";
import logo from "../../images/wtwr.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" className="header__button">
            Add New Clothes
          </button>
        </div>
        <div>Ryan Khazal</div>
        <div>
          <img src={avatar} alt="avatar log" />
        </div>
      </div>
    </header>
  );
};

export default Header;
