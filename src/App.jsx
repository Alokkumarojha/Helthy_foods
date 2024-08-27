import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  let foodItems = [];
  // let foodItems = ["Dall", "Channa", "Roati", "Pulaw", "Bananaq"];
  return (
    <>
      <h1>Helthy Foods</h1>
      <h2>For helthy person</h2>
      <ErrorMessage proFoodItem={foodItems}></ErrorMessage>
      <FoodItems proFoodItem={foodItems}></FoodItems>
    </>
  );
}

export default App;
