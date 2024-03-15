import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const [currentTempUnit, handleToggleSwitch] = useState("C");

  const handleChange = (e) => {
    if (currentTempUnit === "C") handleToggleSwitch("F");
    if (currentTempUnit === "F") handleToggleSwitch("C");
  };

  console.log(currentTempUnit);

  return (
    <label className="switch">
      <input type="checkbox" className="switch__box" onChange={handleChange} />
      <span></span>
      <p>F</p>
      <p>C</p>
    </label>
  );
};

export default ToggleSwitch;
