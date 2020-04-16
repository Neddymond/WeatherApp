const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geoCode = require("./Utils/GeoCode");
const forecast = require("./Utils/Forecast");

 /** Initiating express server */
const app = express();

/** Port for starting up the App; Heroku port or localhost */
const port = process.env.PORT || 3000;

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
        title: "Weather",
        content: "Get Updated Weather Information.",
        name: "Chinedu Ikechi"
    })
})

app.get("/About", (req, res) => {
    res.render("About", {
        title: "About",
        name: "Chinedu Ikechi",
        content: "We return weather forecast using data from Mapbox.com and Weatherbit.com."
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

/** Query Strings */
app.get("/weather", (req, res) => {
    if(!req.query.address){
        return res.send({
            error: "Please provide an address"
        })
    }

    geoCode(req.query.address, (error, {longitude, latitude, location } = {}) =>{
        if(error){
            return res.send({error})
        }
    
        forecast(longitude, latitude, (error, forecastData) => {
            if(error) {
                return res.send({error})
            }

            res.send({
                title: "Weather Forecast",
                address: req.query.address,
                location,
                forecastData
            })
    
            // console.log("Location: ", location);
            // console.log("Data: ", forecastData);
        })
    })

    // res.send({
    //     title: "Weather",
    //     address: req.query.address
    // })
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

app.listen(port, () => {
    console.log(`The server is up on port ${port}`);
})
