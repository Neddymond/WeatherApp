const geoCode = require("./GeoCode");
const forecast = require("./Forecast");

forecast(6.459964, 7.548949, (error, data) => {
    console.log("Error:", error);
    console.log("Data", data);
})

geoCode("Lagos", (error, data) =>{
    console.log("Error:", error);
    console.log("Data:", data);
})