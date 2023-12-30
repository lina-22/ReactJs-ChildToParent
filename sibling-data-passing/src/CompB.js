import React from "react";

function CompB({ name, handleClick }) {
  return (
    <div>
      <hr />
      <h2>Thisis component B</h2>
      <h3>Name is {name}</h3>
      <button onClick={() => handleClick()}>Toggle Name</button>
    </div>
  );
}

export default CompB;
