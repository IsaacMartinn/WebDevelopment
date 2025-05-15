// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// console.log(cars);

const [honda, tesla] = cars;

const {
  model: teslaModel,
  coloursByPopularity: teslaColours,
  speedStats: teslaSpeedStates,
} = tesla;

const [teslaTopColour, teslaTrimColour] = teslaColours;
const { topSpeed: teslaTopSpeed, zerotoSixty: teslaZeroToSixty } =
  teslaSpeedStates;

const {
  model: hondaModel,
  coloursByPopularity: hondaColours,
  speedStats: hondaSpeedStates,
} = honda;

const [hondaTopColour, hondaTrimColour] = hondaColours;
const { topSpeed: hondaTopSpeed, zerotoSixty: hondaZeroToSixty } =
  hondaSpeedStates;

console.log(teslaTopSpeed);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
