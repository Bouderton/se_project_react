import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <section className="weather">
        <div className="weather__info">75F</div>
        <img src="/images/day/day-sunny.svg" className="weather__image" />
      </section>
      <section id="card-section">Card Section</section>
    </main>
  );
};

export default Main;
