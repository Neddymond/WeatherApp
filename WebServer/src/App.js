const express = require("express");

const app = express();

app.get("", (req, res) => {
    res.send("Hello express");
})

app.get("/help", (req, res) => {
    res.send("Welcome to the Help Page");
})

app.get("/about", (req, res) => {
    res.send("Welcome to the About Page");
})

app.get("/weather", (req, res) => {
    res.send("Here's the weather forecast for Today");
})

app.listen(3000, () => {
    console.log("The server is up on port 3000");
})

app.get("/Easter", (req, res) => {
    res.send("Happy Easter. Christ died for You.");
})