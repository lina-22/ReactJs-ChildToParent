import React, { useState } from "react";

function CompA({ name, handleClick }) {
  //   const [name, setName] = useState("Jhon");
  //   function handleClick() {
  //     if (name === "Jhon") {
  //       setName("Alhan");
  //     } else {
  //       setName("Jhon");
  //     }
  //   }
  return (
    <div>
      <hr />
      <h2>Thisis component A</h2>
      <h3>Name is {name}</h3>
      <button onClick={() => handleClick()}>Toggle Name</button>
    </div>
  );
}

export default CompA;
