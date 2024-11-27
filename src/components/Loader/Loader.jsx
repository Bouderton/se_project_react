import "./Loader.css";

const Loader = () => {
  return (
    <>
      <div className="preloader__container">
        <div className="circle-preloader"></div>
        <p className="preloader__text">Getting Weather Data...</p>
      </div>
    </>
  );
};

export default Loader;
