import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add Garmet",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} />
        <h3>{title}</h3>
        <form className="form">
          {children}
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

/* <fieldset className="form__fieldset">
          <input placeholder="Name" type="text">
            Name
          </input>
          <input placeholder="Image URL" type="url">
            Image URL
          </input>
        </fieldset> */
