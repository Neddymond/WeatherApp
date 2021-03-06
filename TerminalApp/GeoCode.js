const request = require("request");

const GeoCode = function(address, callback)
{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibmVkZHltb25kIiwiYSI6ImNrOHJraGkwMTA3a28zaG9hbGM1YzE3d3cifQ.H6XRr7mE3zFXC1glD0C_iA&limit=1`;

    request({url, json: true}, (error, {body}) => {
        if (error)
        {
            callback("Unable to connect to the location service!", undefined)
        }
        else if(body.features.length === 0)
        {
            callback("Unable to find location. Try another search.", undefined);
        }
        else callback(undefined, {
            longitude: body.features[0].center[0],
            latitude: body.features[0].center[1],
            location: body.features[0].place_name
        })
    });
}

module.exports = GeoCode;