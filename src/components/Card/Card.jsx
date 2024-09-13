import React from "react";
import "./Card.css";

const Card = ({ name, description, avatar }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ 
        backgroundImage: `url("${avatar}")` 
        }}></div>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;