import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={"modal"}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        ></button>
        <img src={selectedCard.link} />
        <div>{selectedCard.name}</div>
        <div>Weather Type: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
