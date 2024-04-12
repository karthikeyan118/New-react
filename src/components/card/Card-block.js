import React from "react";
import { groceryData } from "../../Data";
import Card from "./card";
import "./card.css";
function CardBlock() {
  return (
    <>
      <div className="container">
        <h2 className="card-head">Add to your smart basket</h2>
        <div className="wrapper">
          {groceryData.map((data) => (
            <Card data={data} key={data.name} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardBlock;
