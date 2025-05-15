import React from "react";

function Button(props) {
  return <button type={props.type}>{props.action}</button>;
}

export default Button;
