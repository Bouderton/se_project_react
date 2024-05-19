import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const AddItemModal = ({ isOpen, handleAddItem, handleCloseModal }) => {
  // declare state for each input field
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  // create onChange handlers corresponding to each state variable

  function handleSubmit(e) {
    // prevent default behavior
    e.preventDefault();
    // submitting form info
    handleAddItem({ name, weather, imageUrl });
  }

  //  ModalWithForm
  return (
    <ModalWithForm
      title="New Garmet"
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
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
          onChange={handleNameChange}
          value={name}
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
          onChange={handleUrlChange}
          value={imageUrl}
        />
      </label>
      <div className="modal__weather-type">
        <p className="modal__weather-title">Select Weather Type</p>
        <div className="modal__weather-options">
          <label className="modal__weather-option">
            <input
              name="weather"
              type="radio"
              id="hot"
              value="hot"
              onChange={handleWeatherChange}
            />
            Hot
          </label>
        </div>
        <div>
          <label className="modal__weather-option">
            <input
              name="weather"
              type="radio"
              id="warm"
              value="warm"
              onChange={handleWeatherChange}
            />
            Warm
          </label>
        </div>
        <div>
          <label className="modal__weather-option">
            <input
              name="weather"
              type="radio"
              id="cold"
              value="cold"
              onChange={handleWeatherChange}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
  //    Form contents
};

export default AddItemModal;
