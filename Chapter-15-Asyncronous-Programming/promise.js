/*
let promise = new Promise((resolve,reject)=>{
// resolve("Successfull")
reject("Error")
})
console.log(promise);

*/


/*
let promise = new Promise((resolve,reject)=>{
// resolve("Successfull")
reject("Error")
})

promise.then((data)=>{
    console.log(data);
})

promise.catch((data)=>{
    console.log(data);
})
*/

/*
let promise = new Promise((resolve,reject)=>{
resolve("Successfull")
// reject("Error")
})

promise.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
})*/

/*
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Data mil gya")
        reject("Data ni mil rha")
    },3000)
})

promise.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
})*/


// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Hello Tahir");
//         }, 3000);
//     })
// }

// function fetchData2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         resolve("Kese ho bhai");
//         }, 3000);
//     })
// }

// console.log("Fetchingn data");


// fetchData().then((data)=>{
//     console.log("1st Data aa gya",data);
//     return fetchData2()
// }).then((data)=>{
//     console.log("2nd Data aa gya",data);
    
// })



// let response = fetch('https://jsonplaceholder.typicode.com/users');
// response
//     .then(data => {
//         console.log(data)
//         return fetch('https://jsonplaceholder.typicode.com/users');
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err)
//     })