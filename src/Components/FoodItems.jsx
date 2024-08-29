import React from "react";
import Item from "./Item";

const FoodItems = ({ proFoodItem }) => {
  return (
    <>
      <ul className="list-group">
        {proFoodItem.map((items) => (
          <Item
            key={items}
            foodItems={items}
            handleBuyButton={() => console.log(`${items} bought`)}
          ></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
