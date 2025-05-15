import React from "react";
import ReactDOM from "react-dom";

const fName = "Isaac";
const lName = "Martin";

const luckyNumber = 3;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
