import React from "react";
import "./Input.css";

const Input = ({ label, value, _function, min, max, _enterCallFunction }) => {

  const handleKeyEnter = (event) => event.key === "Enter" && _enterCallFunction();

  return (
    <div className="input-number-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type="number"
        className="input-number"
        value={value}
        onChange={_function}
        min={min}
        max={max}
        onKeyDown={handleKeyEnter}
      />
    </div>
  );
};

export default Input;
