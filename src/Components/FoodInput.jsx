import React from "react";
import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      className={styles.foodItem}
      type="text"
      placeholder="Enter food item here"
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
