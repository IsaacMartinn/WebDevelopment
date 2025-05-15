import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const YOURNAME = "Isaac";

ReactDOM.render(
  <div>
    <p>Created by {YOURNAME}</p>
    <p>Copyright {currentDate.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
