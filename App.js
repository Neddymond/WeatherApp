const request = require("request");

const url = "https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=73917db00ca5447aa7b436a55f8d750f"
request({url: url, json: true}, (error, response) => {
    console.log(response.body.data[0].temp);
});
