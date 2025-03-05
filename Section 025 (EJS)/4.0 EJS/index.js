import express from 'express';
const app = express();
const port = 3000;


const date = new Date();
var day = date.getDay();
console.log(day);

app.get("/",(req,res) => {
    const today = new Date();
    var day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day ===0 || day === 6){
        type = "a weekend";
        adv = "it's time to have fun!"
    }
    res.render("index.ejs",
        {
            dayType: type,
            advice: adv,
        }
    );
});

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});

