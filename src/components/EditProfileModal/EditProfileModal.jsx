import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, handleCloseModal, handleEditProfile }) => {
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
    handleEditProfile({ name, avatar });
  }

  useEffect(() => {
    if (isOpen) {
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Edit Profile"
      onClose={handleCloseModal}
      isOpen={isOpen}
      buttonText="Save Changes"
      onSubmit={handleSubmit}
    >
      <label className="modal__form-label">
        Name
        <input
          type="text"
          className="modal__form-input"
          onChange={handleNameChange}
          value={name}
          placeholder={currentUser?.name}
        />
      </label>
      <label className="modal__form-label">
        Avatar
        <input
          className="modal__form-input"
          placeholder={currentUser?.avatar}
          type="url"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
