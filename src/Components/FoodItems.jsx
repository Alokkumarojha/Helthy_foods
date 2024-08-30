import React, { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item, event) => {
    if (!activeItems.includes(item)) {
      setActiveItems([...activeItems, item]);
    }
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            bought={activeItems.includes(item)}
            key={item}
            foodItems={item}
            handleBuyButton={(event) => onBuyButton(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
