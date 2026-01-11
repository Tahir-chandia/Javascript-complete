// 1. What is a pure function, and why is it useful in UI rendering?

// A pure function is a function which return same output of given input and also does not shared any side effect, avoid shared memory and it is helpful for UI rendering because we can predict the output and also it is very easy to debug code. 

// 2. How would you use .map() to transform a list of products into a list of HTML elements?

// done after complete react

// 3. How do you use .reduce() to calculate the total price in a shopping cart?

/*
let arr = [1,2,3,4,5]
let res = arr.reduce((acc,curr)=>{
    return acc + curr
})
console.log(res);
*/

// 4. Explain immutability and how you would update an object in an array without mutating the original.

/*
let obj = {name:"Tahir",
    age:25,
    email:"tk123@gmail.com"
}
function  newObj(obj,name,age,id){
    let newObj = {...obj,name,age,id}
    console.log(newObj);
    
}
console.log(obj);
newObj(obj,"Mustafa",24,true)
console.log(obj);
*/

// 5. How would you compose multiple functions to transform data step-by-step (e.g., sanitize → trim →  capitalize)? Scenario: You’re preparing user input before storing it. (Expected knowledge: Function 
// composition, chaining, pipe or compose logic.)

// chaining 
/*
let name = "Tahir"
let revName = name.split("").reverse().join("")
console.log(revName);
*/

// compose -> right to left

/*
let add = num =>num + 5
let multiply = num =>num * 2
let subtract = num =>num - 10

function compose(...fns) {
    return function (val) {
        return fns.reduceRight((acc, currFn) => {
            return currFn(acc);
        }, val)
    }
}
            
// let result = compose(subtract, multiply, add)(4)
// console.log(result);
 // pipe -> left to right
function pipe(...fns) {
    return function (val) {
        return fns.reduce((acc, currFn) => {
            return currFn(acc);
        }, val)
    }
}

// let result = compose(subtract, multiply, add)(2)
// console.log(result);
*/


// 7. How do you implement your own version of .map() function on arrays?

let arr = [1,2,3,4,5]

let sqrLogic = (r)=>{
    return r *r
}
let cubeLogic = (r)=>{
    return r * r *r
}
let diameterLogic = (r)=>{
    return r * 2
}


let calculate = (logicFn)=>{

    let output = []
    for(let i = 0;i<arr.length;i++){
        output.push(logicFn(arr[i]))
    }
    return output
}

let sqr=calculate(sqrLogic)
let cube = calculate(cubeLogic)
let dia=calculate(diameterLogic)




Array.prototype.ownmap = calculate

let res = arr.ownmap(sqrLogic)
let cubeRes = arr.ownmap(cubeLogic)
let diaRes = arr.ownmap(diameterLogic)
console.log(res);
console.log(cubeRes);
console.log(diaRes);

// console.log(sqr);
// console.log(cube);
// console.log(dia);


// function square(){
//     let arr2 = []
//     for(let i = 0;i<arr.length;i++){
//         arr2.push(arr[i] * arr[i])
//     }
//     return arr2
// }

// function cube(){
//     let arr2 = []
//     for(let i = 0;i<arr.length;i++){
//         arr2.push(arr[i] * arr[i] *arr[i])
//     }
//     return arr2
// }

// function diameter(){
//     let arr2 = []
//     for(let i = 0;i<arr.length;i++){
//         arr2.push(arr[i] *2)
//     }
//     return arr2
// }

// let sqrResult = square()
// let cubeResult = cube()
// let diameterResult = diameter()

// console.log(sqrResult);
// console.log(cubeResult);
// console.log(diameterResult);
