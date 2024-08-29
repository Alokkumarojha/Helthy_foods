import React from "react";
import styles from "./Item.module.css";
const Item = ({ foodItems, handleBuyButton }) => {
  return (
    <li className={styles.foodItem}>
      <span>{foodItems}</span>
      <button className={styles.foodButton} onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};

export default Item;
