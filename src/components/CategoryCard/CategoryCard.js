import React from "react";
import "./Category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
function CategoryCard(props) {
  console.log(props);
  return (
    <>
      <div className="cat-card">
        <img
          src={props.data.source}
          className="cat-img"
          alt={props.data.name}
        />
        <p>{props.data.name}</p>
        <p className="cat-price">
          <strike>{props.data.offer}</strike>
          {props.data.price}
        </p>
        <span className="cat-off">-15%</span>
        <div className="cat-functions"></div>
        <div className="cat-option">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faEye} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
