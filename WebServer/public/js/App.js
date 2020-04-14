console.log("Code no dey lie!");

/** Get Html elements using DOM*/
const weatherForm = document.querySelector("#searchForm");
var locationInput = document.querySelector("input");

/** fetch weather forecast using the location from the input */
weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputValue = locationInput.value;
    locationInput.value = "";
    
    fetch(`http://localhost:3000/weather?address=${inputValue}`).then((res) => {
        res.json().then((data) => {
            if(data.error) return console.log('Please provide another location');
            console.log(data);
        })
    })

    // console.log(inputValue);
})