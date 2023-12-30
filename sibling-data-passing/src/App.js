import CompA from "./CompA";
import CompB from "./CompB";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Jhon");
  function handleClick() {
    if (name === "Jhon") {
      setName("Alhan");
    } else {
      setName("Jhon");
    }
  }
  return (
    <div className="App">
      <CompA name={name} handleClick={handleClick} />
      <CompB name={name} handleClick={handleClick} />
    </div>
  );
}

export default App;
