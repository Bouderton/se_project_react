import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const RegisterModal = ({ isOpen, handleCloseModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  // Text State Changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUrlChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Resets input fields

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  // Submit Function

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText="Sign Up"
      isOpen={isOpen}
    >
      <label className="modal__form-label">
        Email
        <input
          type="text"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          className="modal__form-input"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label className="modal__form-label">
        Password
        <input
          type="text"
          name="password"
          minLength="1"
          maxLength="30"
          placeholder="Password"
          className="modal__form-input"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      {/* FIX WEIRD LABEL CSS */}
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
        Avatar
        <input
          type="url"
          name="avatar"
          minLength="1"
          maxLength="30"
          placeholder="Avatar URL"
          className="modal__form-input"
          onChange={handleUrlChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
