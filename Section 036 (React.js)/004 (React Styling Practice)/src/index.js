//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import reactDom from "react-dom";

const data = new Date();
const dataHours = data.getHours();
console.log(dataHours);

let customStyle = {
  color: "red",
};

let statement = "Good Morning";

if (dataHours <= 1 && dataHours > 12) {
  statement = "Good Morning";
} else if (dataHours >= 12 && dataHours < 18) {
  statement = "Good Afternoon";
  customStyle.color = "blue";
} else {
  statement = "Good Evening";
  customStyle.color = "blue";
}

reactDom.render(
  <h1 className="heading" style={customStyle}>
    {statement}
  </h1>,
  document.getElementById("root")
);
