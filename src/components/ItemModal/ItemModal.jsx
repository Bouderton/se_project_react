import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({ selectedCard, onClose, isOpen, deleteCard }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    deleteCard(selectedCard);
  };
  const currentUser = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;

  return (
    <div className={`modal ${isOpen ? " modal_opened" : ""}`}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        />
        <img
          className="modal__image"
          alt={selectedCard.name}
          src={selectedCard.imageUrl}
        />
        <div className="modal__info-container">
          <div className="modal__image-info">
            {selectedCard.name}
            <span>Weather Type: {selectedCard.weather}</span>
          </div>
          {isOwn ? (
            <button
              className="modal__delete-button_visible"
              type="text"
              onClick={handleDelete}
            >
              Delete Item
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
