import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

const data = JSON.parse(recipeJSON);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  let x = req.body;
  let firstLetter = x.choice.charAt(0).toUpperCase();
  let foodChoice = firstLetter + x.choice.slice(1,x.choice.length);


  // console.log(foodChoice);

  let i = 0;
  while(i<3){
    if (data[i]["ingredients"]["protein"]['name'] === foodChoice){
      console.log("Got it!");
      break;
    }else{
      i++;
      console.log("not here")
    }
  }

  let j = 0 
  const toppings = []
  let lengthOfToppingsArray = data[i]["ingredients"]["toppings"].length

  while(j<lengthOfToppingsArray){
    let toppingQuantity = data[i]["ingredients"]["toppings"][j]['quantity']
    let toppingNames = data[i]["ingredients"]["toppings"][j]['name']
    toppings.push([toppingQuantity,toppingNames])
    j++
  }

  console.log(toppings)

  

  var foodIngredients = {
    proteinName : data[i]["ingredients"]["protein"]['name'],
    proteinPrep : data[i]["ingredients"]["protein"]['preparation'],
    salsaName : data[i]["ingredients"]["salsa"]["name"],
    toppingsList: toppings
  }
  // var proteinName = data[i]["ingredients"]["protein"]['name'];
  // let proteinPrep = data[i]["ingredients"]["protein"]['preparation'];
  // let salsaName = data[i]["ingredients"]["salsa"]["name"];
  // let toppingQuantity = data[i]["ingredients"]["toppings"][0]['quantity'];
  // let toppingNames = data[i]["ingredients"]["toppings"][0]['name'];
  // let lengthOfToppingsArray = data[i]["ingredients"]["toppings"].length



  res.render("index.ejs",{ingredients: foodIngredients});


  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
