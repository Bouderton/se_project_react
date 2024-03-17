import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  isOpen,
}) => {
  return (
    <div
      className={`modal modal__type_${name} ${isOpen ? " modal__opened" : ""}`}
    >
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        />
        <h3 className="modal__form-title">{title}</h3>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
