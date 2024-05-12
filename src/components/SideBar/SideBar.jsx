import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const SideBar = ({ handleCreateModal, handleEditProfile }) => {
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
      <div className="sidebar__profile-data">
        <button
          type="text"
          className="sidebar__user-button"
          onClick={handleEditProfile}
        >
          Edit Profile
        </button>
        <button type="text" className="sidebar__user-button">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
