import "./ItemCard.css";
import heartIcon from "../../images/heart.svg";
import heartIconLiked from "../../images/heart-liked.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemCard = ({ item, onSelectCard, onCardLike, loggedIn }) => {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some((id) => id === currentUser._id);

  return (
    <>
      <div>
        <div className="card__name-container">
          <div className="card__name">{item.name}</div>
          {loggedIn ? (
            <button
              className="card__like-button"
              onClick={() => onCardLike(item._id, isLiked)}
            >
              <img
                src={isLiked ? heartIconLiked : heartIcon}
                alt="like button"
                className="card__like-button_img"
              />
            </button>
          ) : (
            ""
          )}
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
