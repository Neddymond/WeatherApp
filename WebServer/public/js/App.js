console.log("Code no dey lie!");

/** Get Html elements using DOM*/
const weatherForm = document.querySelector("#searchForm");
const locationInput = document.querySelector("input");
const weatherInfoHeader = document.querySelector("#weatherInfo-header");
const message1 = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");

/** fetch weather forecast using the location from the input */
weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputValue = locationInput.value;
    locationInput.value = "";

    /** Assign data to the html elements only when a location is provided */
    if(!inputValue) return message1.textContent = "Please Provide a Location."

    message1.textContent = `please wait while we fetch weather information for ${inputValue}`;
    message2.textContent = "";
    
    fetch(`/weather?address=${inputValue}`).then((res) => {
        res.json().then((data) => {
            if(data.error) return message1.textContent = 'Please provide another location';

            weatherInfoHeader.textContent = `${data.forecastData.Location} Current Weather Information.`;
            message1.textContent = data.location;
            message2.textContent = `It is currently ${data.forecastData.Temperature} degrees in ${inputValue}.`;
        })
    })
})