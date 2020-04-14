console.log("Code no dey lie!");

fetch('http://localhost:3000/weather?address=!').then((res) => {
    res.json().then((data) => {
        if(data.error) return console.log('Please provide another location');
        console.log(data);
    })
})