import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: process.env.PASSWORD,
  port: 5432, 
});

db.connect();
// TODO: 
//  need to make a db and add fields
// add, update, delete options for database
// use the api to get book covers and then finished


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let contents = [
  { id: 1, title: "You Can Negotiate Anything", cover: "https://sive.rs/images/book/NegotiateAnything.webp",author: "Herb Cohen", date:"2023-08-02", rating: 10, review: "Everything is negotiable. Challenge authority. You have the power in any situation. This is how to realize it and use it. A must-read classic from 1980 from a master negotiator. My notes here aren’t enough because the little book is filled with so many memorable stories — examples of great day-to-day moments of negotiation that will stick in your head for when you need them. (I especially loved the one about the power of the prisoner in solitary confinement.) So go buy and read the book. I’m giving it a 10/10 rating even though the second half of the book loses steam, because the first half is so crucial."},
  { id: 2, title: "The Listening Book",cover:"https://sive.rs/images/book/ListeningBook.webp",author: "W.A. Mathieu", date: "2021-09-03",rating: 10, review: "Everyone should read this book of little essays about listening. It teaches your ears to pay more attention. It calls your attention to sounds you hadn’t noticed. It’s beautifully written, and makes your life better. I read it twice, 24 years ago, and reading it again this week, it was even better than I remembered." },
];


app.get("/", async (req, res) => {
  res.render("index.ejs",{
    contents: contents,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// https://sive.rs/book example 
