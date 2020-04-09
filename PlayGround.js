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

const Add = function(a, b, sum)
{
    setTimeout(() => {
        sum(a + b);
    }, 2000);
}

Add(1, 4, (sum) =>{
    console.log(sum);
});