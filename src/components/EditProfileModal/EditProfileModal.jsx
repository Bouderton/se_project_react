import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({
  isOpen,
  handleCloseModal,
  handleEditProfileModal,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleEditProfileModal({ name, avatar });
  }
  return (
    <ModalWithForm
      title="Edit Profile"
      onClose={handleCloseModal}
      isOpen={isOpen}
      buttonText="Save Changes"
    >
      <label className="modal__form-label">
        Name
        <input
          value={currentUser?.name}
          className="modal__form-input"
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__form-label">
        Avatar{" "}
        <input
          className="modal__form-input"
          placeholder="Avatar URL"
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
