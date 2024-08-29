import React from "react";
import styles from "./Item.module.css";
const Item = ({ foodItems }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItems} being bought`);
  };
  return (
    <li className={styles.foodItem}>
      <span>{foodItems}</span>
      <button
        className={styles.foodButton}
        onClick={(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
