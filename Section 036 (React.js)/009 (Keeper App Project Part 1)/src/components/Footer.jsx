import React from "react";

const d = new Date();
let year = d.getFullYear();
console.log(year);

function Footer() {
  return <footer>Copyright © {year} </footer>;
}

export default Footer;
