import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { snacksData } from "../../Data";
function Snacks() {
  return (
    <>
      <section className="container">
        <h2 className="cat-card-head">Emart Snacks</h2>
        <div className="card-wrapper">
          {snacksData.map((snack) => (
            <CategoryCard data={snack} key={snack.name} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Snacks;
