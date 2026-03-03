// Destructuring:
// ❑Destructuring is a JavaScript expression used to unpack values from 
// arrays or properties from objects into distinct variables.
// ❑Think of it like unpacking a suitcase.


// Destructuring Arrays:
// 1.Basic Destructuring

/*
let num = [1,2,3]
let [first,second,third] = num
console.log(first);
console.log(second);
console.log(third);
*/

// 2.Destructuring With Rest Operator

/*
let num = [1,2,3]
let [first,...second] = num
console.log(first);
console.log(second);
*/

// 3.Default Values

/*
let num = [1,2,3]
let [a,b,c,d=10] = num

console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/

// 4.Skip Array Items
/*
let num = [1,2,3]
let [,,c] = num
console.log(c);
*/


// 5.Swapping Values
/*
let a= 6;  
let b= 4;

[a, b] = [b, a]

console.log(a);
console.log(b);
*/

// 6.Nested Array

/*
let arr = ["Tahir","Khalid",[4,5]]
let [user1,user2,[num1,num2]] = arr

console.log(user1);
console.log(user2);
console.log(num1);
console.log(num2);
*/

//7. Array destructuring in function parameters

/**
function sum([a, b]){
        console.log(a + b);
    }
    
    // let a = 10, b = 5;
    let arr = [10, 5]
    sum(arr);
    */


