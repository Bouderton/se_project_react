import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, isOpen, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(selectedCard);
  };
  return (
    <div className={`modal ${isOpen ? " modal__opened" : ""}`}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        ></button>
        <img className="modal__image" src={selectedCard.imageUrl} />
        <div className="modal__info-container">
          <div className="modal__image-info">
            {selectedCard.name}
            <span>Weather Type: {selectedCard.weather}</span>
          </div>
          <button
            className="modal__delete-button"
            type="text"
            onClick={handleDelete}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
