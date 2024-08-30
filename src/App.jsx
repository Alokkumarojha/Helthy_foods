import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItem = [...foodItems, newFoodItem];
      setFoodItems(newItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="heading">
          <span>Helthy Foods</span>
        </h1>

        <FoodItems items={foodItems}></FoodItems>

        <FoodInput handleOnKeyDown={OnKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
      </Container>
      <Container>
        <p>
          These Middle Eastern chickpea fritters are crispy on the outside and
          tender inside. Enjoy them in pita bread with tahini sauce and fresh
          veggies.
        </p>
      </Container>
    </>
  );
}

export default App;
