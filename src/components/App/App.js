import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const weatherTemp = "60F";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      <ModalWithForm title="New Garmet">
        <label>
          Name
          <input type="text" name="name" minLength="1" maxLength="30" />
        </label>
        <label>
          Image
          <input type="url" name="link" minLength="1" />
        </label>
        <p>Select Weather Type</p>
        <div>
          <div>
            <input type="radio" id="hot" value="hot" />
            <label>Hot</label>
          </div>
          <div>
            <input type="radio" id="warm" value="warm" />
            <label>Warm</label>
          </div>
          <div>
            <input type="radio" id="cold" value="cold" />
            <label>Cold</label>
          </div>
        </div>
      </ModalWithForm>
    </div>
  );
}

export default App;
