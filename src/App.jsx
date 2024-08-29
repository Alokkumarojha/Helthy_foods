import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  // let foodItems = [];
  let foodItems = ["Dall", "Channa", "Roati", "Pulaw", "Banana"];
  return (
    <>
      <Container>
        <h1 className="heading">
          <span>Helthy Foods</span>
        </h1>

        <ErrorMessage proFoodItem={foodItems}></ErrorMessage>
        <FoodItems proFoodItem={foodItems}></FoodItems>
        <FoodInput></FoodInput>
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
