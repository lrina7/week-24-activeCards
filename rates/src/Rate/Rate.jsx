import React from "react";

const Rate = (props) => {
  const {name, price, speed, volume, chosen, onClick} = props;

  return (<div className={`tarif ${chosen ? "chosenCard" : ""}`} onClick={onClick}>
    <div className="name">{name}</div>
    <div className="price">{price}</div>
    <div className="speed">{speed}</div>
    <div className="volume">{volume}</div>
  </div>)
}

export default Rate;