import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
  spanText,
  orModal,
}) => {
  return (
    <div
      className={`modal modal__type_${name} ${isOpen ? " modal_opened" : ""}`}
    >
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        />
        <h3 className="modal__form-title">{title}</h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div className="modal__buttons-container">
            <button type="submit" className="modal__submit-button">
              {buttonText}
            </button>
            <button type="text" className="modal__button-or" onClick={orModal}>
              {spanText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
