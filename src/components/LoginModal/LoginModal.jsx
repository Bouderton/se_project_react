import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const LoginModal = ({ handleCloseModal, isOpen, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin({ email, password });
  }

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText="Log In"
      isOpen={isOpen}
    >
      <label className="modal__form-label">
        Email
        <input
          type="email"
          name="email"
          value={email}
          minLength="1"
          maxLength="30"
          placeholder="Email"
          className="modal__form-input"
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__form-label">
        Password
        <input
          type="text"
          name="password"
          value={password}
          minLength="1"
          maxLength="30"
          placeholder="Password"
          className="modal__form-input"
          onChange={handlePasswordChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
