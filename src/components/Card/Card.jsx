import React from "react";
import "./Card.css";

function Card({ image, continent, country, ...props }) {
  return (
    <div className="card">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h1 className="continent">{continent}</h1>
        <p className="country">{country}</p>
      </div>
    </div>
  );
}

export default Card;
