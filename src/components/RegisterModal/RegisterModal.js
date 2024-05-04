import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const RegisterModal = ({ isOpen, handleCloseModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
    }
  }, [isOpen]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          className="modal__form-input"
          onChange={handleEmailChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
