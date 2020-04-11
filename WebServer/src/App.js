const express = require("express");

const app = express();

app.get("", (req, res) => {
    res.send("Hello express");
})

app.get("/help", (req, res) => {
    res.send([{
        name: "Chinedu",
        age: 27,
        Occupation: "Software Engineer"
    },{
        name: "Andrew",
        age: 24,
        occuapation: "Tutor"
    }]);
})

app.get("/about", (req, res) => {
    res.send("<h1>Wanna know more about me?</h1>");
})

app.get("/weather", (req, res) => {
    res.send({
        location: "Enugu",
        Temperature: "It is currently 29.58 degrees"
    });
})

app.listen(3000, () => {
    console.log("The server is up on port 3000");
})
