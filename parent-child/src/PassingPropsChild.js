import React from "react";

function PassiingPropsChild(props) {
  const data = props.name;
  return (
    <div>
      {props.children}
      <h1>Hello world from children</h1>
      <p>{props.name}</p>
      <p>{data}</p>
      <p>{props.age}</p>
      <p>Count: {props.count}</p>
      <h4>{props.arr}</h4>
      <h5>{JSON.stringify(props.obj1)}</h5>
    </div>
  );
}

export default PassiingPropsChild;
