const geoCode = require("./GeoCode");
const forecast = require("./Forecast");

const arg = process.argv[2];

if(!arg)
{
    return console.log("Provide a valid location");
}
else
{
    geoCode(arg, (error, {longitude, latitude, location }) =>{
        if(error) return console.log(error);
    
        forecast(longitude, latitude, (error, forecastData) => {
            if(error) return console.log(error);
    
            console.log("Location: ", location);
            console.log("Data: ", forecastData);
        })
    })
    
}

