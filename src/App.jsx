import "./App.css";

function App() {
  let foodItems = ["Apple", "Banana", "Dall", "Green veg.", "Orange", "Ghee"];
  return (
    <>
      <h1>Helthy Foods</h1>
      <ul class="list-group">
        {foodItems.map((items) => (
          <li key={items} class="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
