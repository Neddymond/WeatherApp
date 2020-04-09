const request = require("request");

const url = "https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=73917db00ca5447aa7b436a55f8d750f"
request({url: url, json: true}, (error, response) => {
    if(error)
    {
        console.log("Unable to connect to the Weather Service!");
    }
    else if(response.body.error)
    {
        console.log("Unable to find location");
    }
    else
    {
        console.log(response.body.data[0].temp);
    }
});

const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmVkZHltb25kIiwiYSI6ImNrOHJraGkwMTA3a28zaG9hbGM1YzE3d3cifQ.H6XRr7mE3zFXC1glD0C_iA&limit=1"
request({url: geoCodeUrl, json: true}, (error, response) =>{
    if(error)
    {
        console.log("Unable to connect to the location service!")
    }
    else if (response.body.features.length === 0)
    {
        console.log("Unable to find location")
    }
    else
    {
        console.log(`The lattitude for the location is ${response.body.features[0].center[0]} and the longitude to the location is ${response.body.features[0].center[1]}`);

    }
})