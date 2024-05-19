import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ClothesSection = ({
  clothingItems,
  handleCreateModal,
  onSelectCard,
  loggedIn,
  onCardLike,
}) => {
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
          return (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              loggedIn={loggedIn}
              onCardLike={onCardLike}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
