// 19. How would you handle high-precision decimal math in JS?

// method 1 without liabrary 

// let num = Number((0.1 + 0.2).toFixed(2))
// console.log(num === 0.3);


// method 2 with liabrary

let Decimal = require("decimal.js")
let num1 = Decimal(0.1) 
let num2 = Decimal(0.2)
let sum = Number(num1.plus(num2))
console.log(sum );

