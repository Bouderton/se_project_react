import SideBar from "../SideBar/SideBar";
import ClothingSection from "../ClothesSection/ClothesSection";

const Profile = ({ clothingItems, handleCreateModal, onSelectCard }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothingSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        handleCreateModal={handleCreateModal}
      />
    </div>
  );
};

export default Profile;
