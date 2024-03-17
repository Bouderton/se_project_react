import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  // declare state for each input field

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  // create onChange handlers corresponding to each state variable

  function handleSubmit(e) {
    // prevent default behavior
    e.preventDefault();
    // call onAddItem with appropriate arguments
    onAddItem();
  }

  //  Pass appropiate props to ModalWithForm
  //  ModalWithForm
  <ModalWithForm></ModalWithForm>;
  //    Form contents
};

export default AddItemModal;
