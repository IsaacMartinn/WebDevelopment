import React, { useState } from "react";

//Challenge:
//1. Given that you can get the current time using:
// let time = new Date().toLocaleTimeString();
// console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

function App() {
  // let time = new Date().toLocaleTimeString();
  // console.log(time);

  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{now.slice(0, 7)}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
