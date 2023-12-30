import PassingPropsChild from "./PassingPropsChild";

function App() {
  let num = 100;
  return (
    <div className="App">
      <h2 style={{ backgroundColor: "red" }}>Hello Parent app</h2>
      {
        <PassingPropsChild
          name="my name is Lina"
          age={36}
          count={num}
          arr={[1, 2, 3, 4, 5, 6]}
          obj1={{ a: 10, b: 20 }}
        />
      }
    </div>
  );
}

export default App;
