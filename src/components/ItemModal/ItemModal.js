import "./ItemModal.css";

const ItemModal = ({ selectedCard }) => {
  return (
    <div className={"modal"}>
      <div className="modal__content">
        <img src={selectedCard.link} />
        <div>{selectedCard.name}</div>
        <div>Weather Type: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
