import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, handleCloseModal }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <ModalWithForm
      title="Edit Profile"
      onClose={handleCloseModal}
      isOpen={isOpen}
      buttonText="Save Changes"
    >
      <label className="modal__form-label">
        Name{" "}
        <input className="modal__form-input" placeholder={currentUser?.name} />
      </label>
      <label className="modal__form-label">
        Avatar <input className="modal__form-input" placeholder="New Avatar" />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
