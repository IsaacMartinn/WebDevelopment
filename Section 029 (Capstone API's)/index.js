import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/recipe", async (req, res) => {
    try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const drinkName = response.data.drinks[0].strDrink;
        const drinkImage = response.data.drinks[0].strDrinkThumb;
        const drinkInstructions = response.data.drinks[0].strInstructions;
        const data = response.data.drinks[0]

        res.render("index.ejs", { 
            drinkName : drinkName,
            drinkImage : drinkImage,
            drinkInstructions : drinkInstructions,
            data : data,
        });
    } catch (error) {
        console.error("Failed to fetch recipe: ", error.message);
        res.status(500).send("Failed to fetch recipe. Please try again.");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
