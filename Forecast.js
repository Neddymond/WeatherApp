const request = require("request");

const Forecast = function(lon, lat, callback)
{
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=73917db00ca5447aa7b436a55f8d750f`;

    request({url: url, json: true}, (error, response) => {
        if(error)
        {
            callback("Unable to connect the weather service!", undefined);
        }
        else if(response.body.error)
        {
            callback("Unable to find location. Try another search.", undefined);
        }
        else callback(undefined, {
            Location: response.body.data[0].city_name,
            Latitude: response.body.data[0].lat,
            Temperature: response.body.data[0].temp
        })
    })
}

module.exports = Forecast;