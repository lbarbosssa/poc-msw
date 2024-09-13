import React from "react";
import "./IconButton.css"; 

const IconButton = ({ icon, _function }) => {
  return (
    <button 
      className="icon-button" 
      onClick={_function}
    >
      <div style={{backgroundImage: `url('${icon}')`}} className="icon-image" />
    </button>
  );
};

export default IconButton;
