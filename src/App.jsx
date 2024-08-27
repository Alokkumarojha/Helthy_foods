import "./App.css";

function App() {
  let foodItems = ["Dall", "Channa", "Roati", "Pulaw", "Banana"];
  let emptyMessage = foodItems.length === 0 ? <h1>I am still hungry</h1> : null;
  return (
    <>
      <h1>Helthy Foods</h1>
      <h2>For helthy person</h2>
      {emptyMessage}
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
