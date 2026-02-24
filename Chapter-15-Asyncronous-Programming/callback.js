/*Callback:
1.Callback is nothing but a function
2.Wo function js me koi function pass kya jae to wo HOD(Higher Order Function) hota h.
3.Jo Function as a arguement ksi function me pass kya jae to wo Callback Function hota h*/


//example1:


/*
function hod(name,callback){
callback(name)
}

function printName(name){
    console.log("Hello",name);
}

hod("Khan",printName)*/


//example2:

/*
function calculate(a,b,operation){
    operation(a,b)
}

function sum(a,b){
    console.log(a + b);
}

function sabtract(a,b){
    console.log(a - b);
}

function multiply(a,b){
    console.log(a * b);
}

function divide(a,b){
    console.log(a / b);
}

calculate(4,2,sum)
calculate(4,2,sabtract)
calculate(4,2,multiply)
calculate(4,2,divide)
*/

//exapmple3 (async):

/*
console.log("1) fetching data ...");

function fetchData(processData){
    setTimeout(()=>{
        console.log("2) data fetched...");
        processData()
    },3000)
}

function processData(){
    console.log("3) processing with data...");
}

fetchData(processData)

console.log("4) Some other task");
*/

//example4 (async):


/*
function getData(data,callback){
    setTimeout(()=>{
        console.log(data);
        if(callback){
            callback()
        }
    },3000)
}

console.log("Fetching First Data...");

getData("1st Data",()=>{
console.log("Fetching 2nd Data");
getData("2nd Data",()=>{
    console.log("Fetching 3rd Data");
    getData("3rd Data")
})
}
)
*/




// Real World Scenario of Callback
// Note:- Never try to understand 🙂, if you want to live long

// function getUsers(callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             const users = JSON.parse(xhr.responseText);
//             callback(null, users);
//         } else {
//             callback(`Error: ${xhr.status}`);
//         }
//     };

//     xhr.onerror = function () {
//         callback('Network error');
//     };

//     xhr.send();
// }


// function showData(err, data) {
//     if (err) {
//         console.log("Failed:", err);
//     } else {
//         console.log("Success:", data);
//     }
// }

// // Using the function
// getUsers(showData);