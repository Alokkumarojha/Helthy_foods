import React from "react";
import styles from "./Item.module.css";
const Item = ({ foodItems }) => {
  return (
    <li className={styles.foodItem}>
      <span>{foodItems}</span>
    </li>
  );
};

export default Item;
