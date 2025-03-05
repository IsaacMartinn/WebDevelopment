import express from "express";
import morgan from "morgan"; //logging middleware

const app = express();
const port = 3000;

app.use(morgan("tiny")); //new

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
