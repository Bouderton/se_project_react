import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, isOpen, deleteCard }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    deleteCard(selectedCard);
  };
  // const isOwn = selectedCard.owner === currentUser._id;

  // // Creating a variable which you'll then set in `className` for the delete button
  // const itemDeleteButtonClassName = `item__delete-button ${
  //   isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  // }`;

  return (
    <div className={`modal ${isOpen ? " modal__opened" : ""}`}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        />
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
