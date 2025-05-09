import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res) => {
  var x = req.body;
  var combinedName = x.street+x.pet;
  res.send(`<h1>Your band name is: </h1><br /><h2>${combinedName}</h2>`);
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});