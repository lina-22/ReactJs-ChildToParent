import Form from "./Form";

function App() {
  const getData = (data) => {
    console.log("comming from AppJs", data);
  };

  return (
    <div className="App">
      <Form onSubmitApp={getData} />
    </div>
  );
}

export default App;
