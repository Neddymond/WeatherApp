console.log("Code no dey lie!");

/** Get Html elements using DOM*/
const weatherForm = document.querySelector("#searchForm");
const locationInput = document.querySelector("input");
const weatherInfoHeader = document.querySelector("#weatherInfo-header");
const locationData = document.querySelector("#message-1");
const temperature = document.querySelector("#message-2");
const description = document.querySelector("#message-3");
const longitude = document.querySelector("#message-4");
const latitude = document.querySelector("#message-5");

/** fetch weather forecast using the location from the input */
weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputValue = locationInput.value;
    locationInput.value = "";

    /** Assign data to the html elements only when a location is provided */
    if(!inputValue) return message1.textContent = "Please Provide a Location."

    locationData.textContent = `please wait while we fetch weather information for ${inputValue}`;
    temperature.textContent = "";
    description.textContent = "";
    longitude.textContent = "";
    latitude.textContent = "";
    
    fetch(`/weather?address=${inputValue}`).then((res) => {
        res.json().then((data) => {
            if(data.error) return message1.textContent = 'Please provide another location';

            /** Display weather info to the browser */
            weatherInfoHeader.textContent = `${data.location} Current Weather Information.`;
            locationData.textContent = `Location: ${data.location}`;
            temperature.textContent = `Temperature: It is currently ${data.forecastData.Temperature} degrees in ${inputValue}.`;
            description.textContent = `Description: ${data.forecastData.Description}`;
            longitude.textContent = `Longitude: ${data.forecastData.Longitude}`;
            latitude.textContent = `Latitude: ${data.forecastData.Latitude}`;
        })
    })
})