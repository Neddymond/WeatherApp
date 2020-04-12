// const CallName = function(names, call back)
// {
//     setTimeout(() => {
//         const data = {
//             longitude: 0,
//             lattitude: 0
//         }

//         callback(data);
//     }, 2000);
// }

// CallName("Chinedu", (data) => {console.log(data)}) 

// const Add = function(a, b, sum)
// {
//     setTimeout(() => {
//         sum(a + b);
//     }, 2000);
// }

// Add(1, 4, (sum) =>{
//     console.log(sum);
// });


// const https = require("https");

// const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Lagos.json?access_token=pk.eyJ1IjoibmVkZHltb25kIiwiYSI6ImNrOHJraGkwMTA3a28zaG9hbGM1YzE3d3cifQ.H6XRr7mE3zFXC1glD0C_iA&limit=1`;

// const request = https.request(url, (response) => {
//     let data = "";

//     response.on("data", (chunk) => {
//         data += chunk.toString();
//     })

//     response.on("end", () => {
//         const body = JSON.parse(data);
//         console.log(body);
//     })
// })

// request.end();

var a = 42;
var b = String(a);
var c = "3.14";
var d = Number(c);

console.log(b); // "42"
console.log(d); // 3.14

var e = +a; // "42"

var z = 0 | -0;
console.log(z);