import React from "react";
import Form from "./Form";
import Register from "./Register";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? <Form /> : <Register />}
    </div>
  );
}

export default App;
