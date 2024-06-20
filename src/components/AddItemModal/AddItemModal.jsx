import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const AddItemModal = ({ isOpen, handleAddItem, handleCloseModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

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
          required
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
          required
        />
      </label>
      <div className="modal__weather-type">
        <p className="modal__weather-title">Select Weather Type</p>
        <div>
          <label className="modal__weather-option">
            <input
              name="weather"
              type="radio"
              id="hot"
              value="hot"
              checked={weather === "hot"}
              onChange={handleWeatherChange}
              required
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
              checked={weather === "warm"}
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
              checked={weather === "cold"}
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
