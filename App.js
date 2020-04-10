const geoCode = require("./GeoCode");
const forecast = require("./Forecast");

const arg = process.argv[2];

if(!arg)
{
    return console.log("Provide a valid location");
}
else
{
    geoCode(arg, (error, data) =>{
        if(error) return console.log(error);
    
        forecast(data.longitude, data.latitude, (error, forecastData) => {
            if(error) return console.log(error);
    
            console.log("Location: ", data);
            console.log("Data: ", forecastData);
        })
    })
    
}

