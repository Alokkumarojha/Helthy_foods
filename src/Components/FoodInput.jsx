import React from "react";
import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const eventHandleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      className={styles.foodItem}
      type="text"
      placeholder="Enter food item here"
      onChange={eventHandleOnChange}
    />
  );
};

export default FoodInput;
