import "./ItemCard.css";
import heartIcon from "../../images/heart.svg";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <>
      <div>
        <div className="card__name-container">
          <div className="card__name">{item.name}</div>
          <button className="card__like-button">
            {/* HANDLE LIKE COLOR CHANGE */}
            <img
              src={heartIcon}
              alt="like button"
              className="card__like-button_img"
            />
          </button>
        </div>
        <img
          src={item.imageUrl}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
      </div>
    </>
  );
};

export default ItemCard;
