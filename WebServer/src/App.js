const path = require("path");
const express = require("express");

 /** Initiating express server */
const app = express();

/** The directory to serve static files from */
const publicDirectoryPath = path.join(__dirname, "../Public");
const customizedViewPath = path.join(__dirname, "../Templates");

/** Setting up extension for handlebar module */
app.set("view engine", "hbs");

/** Customize our "views" location */
app.set("views", customizedViewPath);

/** Serve up static files from the specified directory */
app.use(express.static(publicDirectoryPath));

/** Render dynamic file */
app.get("", (req, res) => {
    res.render("index", {
        title: "Dynamic Template",
        name: "Chinedu Ikechi"
    })
})

app.get("/About", (req, res) => {
    res.render("About", {
        title: "About",
        content: "Let me tell you somn you don't know about me."
    });
})

app.get("/Help", (req, res) => {
    res.render("Help", {
        title: "Help",
        message: "Come get some help."
    })
})
// app.get("", (req, res) => {
//     res.send("Hello express");
// })


app.get("/weather", (req, res) => {
    res.send({
        location: "Enugu",
        Temperature: "It is currently 29.58 degrees"
    });
})

app.listen(3000, () => {
    console.log("The server is up on port 3000");
})
