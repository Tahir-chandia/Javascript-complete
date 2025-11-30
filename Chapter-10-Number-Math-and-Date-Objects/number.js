//Numbers in javascript.

/*In JavaScript, numbers represent both integer and floating-point values. Unlike many other languages, JavaScript has only one number type: 
Number. No separate types for integers or floats.
 */

/*
let age = 24 // integer
let price = 19.99 // floating - point
let negative = -7 // Negative number or integer

console.log(typeof age);
console.log(typeof price);
console.log(typeof negative);

*/

/* Number is technically a constructor function (also called a built-in object) 
in JavaScript*/


// literal Method v/s Constructor Method For Creating a Number:

//1.Literl method (Recomended and creates primitive datatype) 

/*
let num = 12345 //(Recomended)
let num1 = Number("1234")
let num2 = Number(1234)
console.log(num);
console.log(num1);
console.log(num2);
*/

//2.Constructor method

/*
let num3 = new Number("12345")
console.log(num3);
*/


//  new Number() creates an object, not a primitive number. This can lead to confusing bugs and unexpected behavior.
//  Always use number  literals or Number(value) without new

