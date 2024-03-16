import avatar from "../../images/avatar-logo.svg";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img src={avatar} alt="avater logo" />
        <p className="sidebar__profile-text">Terrence Tegegne</p>
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
