import React, { useContext } from "react";
import "./ToggleSwitch.css";
import { CurrentTempUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  // const [currentTempUnit, handleToggleSwitch] = useState("C");

  // const handleChange = (e) => {
  //   if (currentTempUnit === "C") handleToggleSwitch("F");
  //   if (currentTempUnit === "F") handleToggleSwitch("C");
  // };

  // console.log(currentTempUnit);
  const { currentTempUnit, handleToggleSwitch } = useContext(
    CurrentTempUnitContext
  );

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitch}
      />
      <span
        className={
          currentTempUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTempUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTempUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
