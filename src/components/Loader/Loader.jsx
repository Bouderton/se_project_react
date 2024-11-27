import "./Loader.css";

const Loader = ({ size }) => {
  return (
    <>
      <div className="preloader__container">
        <div
          style={{ width: size, height: size }}
          className="circle-preloader"
        ></div>
        <p className="preloader__text">Getting Weather Data...</p>
      </div>
    </>
  );
};

export default Loader;
