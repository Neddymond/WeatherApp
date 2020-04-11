const path = require("path");
const express = require("express");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../Public");

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.send("Hello express");
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
