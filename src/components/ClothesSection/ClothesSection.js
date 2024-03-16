import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({
  clothingItems,
  handleCreateModal,
  onSelectCard,
}) => {
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
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          );
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
