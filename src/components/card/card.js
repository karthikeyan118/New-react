import React from "react";
import "./card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.data.source} className="card-image" alt={props.name} />
        {props.data.isOffer ? <span className="offer">-15%</span> : null}
        <div className="card-content">
          <p className="prod-name">{props.data.category}</p>
          <h6>{props.data.name}</h6>
          <span className="price">
            {props.data.isOffer ? <strike>${props.data.offer}</strike> : null}
            <span>${props.data.price}</span>
          </span>
          <div className="qty">
            <p className="pack">Pack of ${props.data.packQty} each</p>
            <div className="price-enter">
              <div className="adjust-btn">-</div>
              <input type="text" />
              <div className="adjust-btn">+</div>
            </div>
          </div>
          <button className="btn">ADD TO CART</button>
        </div>
      </div>
    </>
  );
}

export default Card;
