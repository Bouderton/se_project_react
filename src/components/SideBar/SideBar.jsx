import avatar from "../../images/avatar-logo.svg";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const SideBar = () => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img
          src={currentUser?.avatar}
          alt="avater logo"
          className="sidebar__avatar"
        />
        <p className="sidebar__profile-text">{currentUser?.name}</p>
      </div>
    </div>
  );
};

export default SideBar;

// NOTES
// ADD CLOTHING ITEMS
// ADD CLOTHING ITEMS FROM MODAL FEATURE
// BE ABLE TO DELETE CARDS
// ADD NEW CARDS
// PRAY
