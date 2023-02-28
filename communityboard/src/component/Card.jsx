import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img" src={props.img} alt="" />
      <h2 className="card-name">{props.name}</h2>
      <h3 className="card-location">{props.location}</h3>
      <button className="card-button">
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
          View Menu
        </a>
      </button>
    </div>
  );
};

export default Card;
