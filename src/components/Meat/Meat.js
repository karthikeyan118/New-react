import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { MeatData } from "../../Data";
function Meat() {
  return (
    <>
      <section className="container">
        <h2 className="cat-card-head">Emart Meat & Eggs</h2>
        <div className="card-wrapper">
          {MeatData.map((meat) => (
            <CategoryCard data={meat} key={meat.name} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Meat;
