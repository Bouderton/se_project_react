import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, handleAddItem, handleCloseModal }) => {
  // declare state for each input field

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  // create onChange handlers corresponding to each state variable

  function handleSubmit(e) {
    // prevent default behavior
    e.preventDefault();
    // call onAddItem with appropriate arguments
  }

  //  Pass appropiate props to ModalWithForm
  //  ModalWithForm
  return (
    <ModalWithForm
      title="New Garmet"
      onClose={handleCloseModal}
      buttonText="Add garment"
      isOpen={isOpen}
    >
      <label className="modal__form-label">
        Name
        <input
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          className="modal__form-input"
        />
      </label>
      <label className="modal__form-label">
        Image
        <input
          type="url"
          name="link"
          placeholder="Image URL"
          minLength="1"
          className="modal__form-input"
        />
      </label>
      <div className="modal__weather-type">
        <p className="modal__weather-title">Select Weather Type</p>
        <div>
          <input name="weather" type="radio" id="hot" value="hot" />
          <label className="modal__weather-option">Hot</label>
        </div>
        <div>
          <input name="weather" type="radio" id="warm" value="warm" />
          <label className="modal__weather-option">Warm</label>
        </div>
        <div>
          <input name="weather" type="radio" id="cold" value="cold" />
          <label className="modal__weather-option">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
  //    Form contents
};

export default AddItemModal;
