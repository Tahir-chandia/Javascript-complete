// Number Instance Methods (Used on Number Primitives)

// Methods:
// 1.toFixed(n) Formats number to n decimal places
 
// let num = 1234
// let num2 = 127.71986
// let num3 = 127.173232
// console.log(typeof num);
// console.log(num.toFixed(2),typeof num.toFixed(2));// it can return string type
// console.log(num2.toFixed(2));// it can roundof values
// console.log(num3.toFixed(2));



// 2.toExponential(n) Converts to exponential notation

// let num = 123.2
// let num2 = 127
// console.log(typeof num);
// console.log(num.toExponential(),typeof num.toExponential());// it can return string type
// console.log(num2.toExponential(2));// it cannot roundof values


// 3.toPrecision(n) Formats to n total digits

let num = 1234.234
let num2 = 127.3444
console.log(typeof num);
console.log(num.toPrecision(),typeof num.toPrecision(3));// it can return string type
console.log(num2.toPrecision(4));// it cannot roundof values
console.log(num2.toPrecision(2));// when we give less value to precise value it gives exponential value

// 4.toString() Converts number to string

// let num = 1234
// console.log(typeof num);
// let num2= num.toString()
// console.log(typeof num2);

// 5.valueOf() Returns primitive value of Number object
 

// let num1 = new Number(123)

// console.log(num1);
// console.log(typeof num1);

// let num2 = num1.valueOf()
// console.log(num2);
// console.log(typeof num2);
