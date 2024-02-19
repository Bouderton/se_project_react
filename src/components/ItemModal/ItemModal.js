import "./ItemModal.css";

const ItemModal = ({ selectedCard }) => {
  return (
    <div className={"modal"}>
      <div className="modal__content">
        <img src={selectedCard.link} />
        <div>Item Name</div>
        <div>Weather Type</div>
      </div>
    </div>
  );
};

export default ItemModal;
