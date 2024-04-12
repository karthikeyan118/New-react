import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { FruitData } from "../../Data";
import "./Fruits.css";
function Fruits() {
  console.log(FruitData);
  return (
    <>
      <section className="container">
        <h2 className="cat-card-head">Emart Fruits</h2>
        <div className="card-wrapper">
          {FruitData.map((fruit) => (
            <CategoryCard data={fruit} key={fruit.name} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Fruits;
