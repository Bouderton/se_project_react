import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({
  clothingItems,
  handleCreateModal,
  onSelectCard,
  handleEditProfile,
}) => {
  return (
    <div className="profile">
      <SideBar handleEditProfile={handleEditProfile} />
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        handleCreateModal={handleCreateModal}
      />
    </div>
  );
};

export default Profile;
