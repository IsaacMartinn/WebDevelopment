import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />

      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      {/* <button type="submit">Register</button> */}
      <Button type="submit" action="Register" />
    </form>
  );
}

export default Form;
