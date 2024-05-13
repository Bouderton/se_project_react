import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ClothesSection = ({ clothingItems, handleCreateModal, onSelectCard }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className="profile__clothes-section">
      <div className="profile__clothes-text-container">
        <p className="profile__clothes-title">Your Items</p>
        <button
          type="text"
          className="profile__clothes-add-button"
          onClick={handleCreateModal}
        >
          + Add New
        </button>
      </div>
      <div className="profile__clothes-items">
        {clothingItems.map((item) => {
          const isOwn = item.owner === currentUser._id;
          console.log(item.owner, currentUser._id);
          return (
            isOwn && (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            )
          );
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
