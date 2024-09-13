import React from "react";
import "./Button.css";

const Button = ({ label, _function, type = "button", color = "#3498db" }) => {
  return (
    <button 
      className="custom-button" 
      onClick={_function} 
      type={type} 
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
};

export default Button;
