import express from "express";

import { dirname } from "path"; //the next 3 lines of code allows to dynamically type file path to get html code
import { fileURLToPath } from "url"; 
const __dirname = dirname(fileURLToPath(import.meta.url));

import bodyParser from "body-parser";// sends stuff

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res) => {
  var x = req.body;
  console.log(x);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
