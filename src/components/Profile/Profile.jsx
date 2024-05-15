import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({
  clothingItems,
  handleCreateModal,
  onSelectCard,
  handleEditProfileModal,
  setLoggedIn,
  loggedIn,
  onCardLike,
}) => {
  return (
    <div className="profile">
      <SideBar
        handleEditProfile={handleEditProfileModal}
        setLoggedIn={setLoggedIn}
      />
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        handleCreateModal={handleCreateModal}
        loggedIn={loggedIn}
        onCardLike={onCardLike}
      />
    </div>
  );
};

export default Profile;
