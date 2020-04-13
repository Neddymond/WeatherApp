const path = require("path");
const express = require("express");
const hbs = require("hbs");

 /** Initiating express server */
const app = express();

/** Define paths for Express config */
const publicDirectoryPath = path.join(__dirname, "../public");
const customizedViewPath = path.join(__dirname, "../Templates/views");
const partialsPath = path.join(__dirname, "../Templates/partials");

/** Setting up extension for handlebar module */
app.set("view engine", "hbs");

/** Customize our "views" and partials location */
app.set("views", customizedViewPath);
hbs.registerPartials(partialsPath);

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
        name: "Chinedu Ikechi",
        content: "Let me tell you somn you don't know about me."
    });
})

app.get("/Help", (req, res) => {
    res.render("Help", {
        title: "Help",
        name: "Chinedu Ikechi",
        message: "Come get some help."
    })
})
// app.get("", (req, res) => {
//     res.send("Hello express");
// })

app.get("/weather", (req, res) => {
    res.send({
        title: "Weather",
        location: "Enugu",
        Temperature: "It is currently 29.58 degrees"
    });
})

app.get('/help/*', (req, res) => {
    res.render('ErrorHandler', {
        title: "ErrorPage",
        name: "chinedu Ikechi",
        errorMessage: 'Help article not found'
    })
})

/** Set up 404 message for unavailable files */
app.get('*', (req, res) => {
    res.render('ErrorHandler', {
        title: "ErrorPage",
        name: "chinedu Ikechi",
        errorMessage: "Page not found"
    })
})

app.listen(3000, () => {
    console.log("The server is up on port 3000");
})
