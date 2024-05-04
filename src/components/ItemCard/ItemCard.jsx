import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card__name-container">
        <div className="card__name">{item.name}</div>
      </div>
      <img
        src={item.imageUrl}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default ItemCard;
