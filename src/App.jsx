import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  // let foodItems = [];
  let foodItems = ["Dall", "Channa", "Roati", "Pulaw", "Banana"];
  return (
    <>
      <div className="food-container">
        <h1 className="heading">
          <span>Helthy Foods</span>
        </h1>

        <ErrorMessage proFoodItem={foodItems}></ErrorMessage>
        <FoodItems proFoodItem={foodItems}></FoodItems>
      </div>
    </>
  );
}

export default App;
