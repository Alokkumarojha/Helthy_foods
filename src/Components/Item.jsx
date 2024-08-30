import React from "react";
import styles from "./Item.module.css";

const Item = ({ foodItems, bought, handleBuyButton }) => {
  return (
    <li className={`list-group-item ${styles.foodItem} ${bought && "active"}`}>
      <span>{foodItems}</span>
      <button className={styles.foodButton} onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};

export default Item;
