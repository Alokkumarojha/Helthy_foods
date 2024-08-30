import React from "react";
import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnKeyDown }) => {
  return (
    <input
      className={styles.foodItem}
      type="text"
      placeholder="Enter food item here"
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default FoodInput;
