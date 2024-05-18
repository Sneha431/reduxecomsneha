import { useState } from "react";
import "./App.css";
function App() {
  let name = "Sneha"; //variable injection
  const [count, setcount] = useState(15);
  const inc = () => {
    setcount(count + 1);
    setcount(count + 1);
    setcount(count + 1);
  };
  const dec = () => {
    if (count < 1) return;
    setcount(count - 1);
  };
  return (
    <>
      <h1>Welcome {name}</h1>
      <h2>Count value:{count}</h2>
      <button onClick={inc}>Add Value</button>
      <button onClick={dec}>Remove Value</button>
      <p>Footer</p>
    </>
  );
}

export default App;
