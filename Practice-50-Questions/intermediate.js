// 16. What’s the difference between parseInt and Number()?


//difference 1:
/*
console.log(Number("2.33"));// it gives float values
console.log(parseInt("2.33"));// it gives only integer
*/


//difference 2:
/*
console.log(Number("2.33sasasa"));// it gives NaN
console.log(parseInt("2.33sasasa"));// it gives only integer because it give value as possible
console.log(parseInt("2sasasa3.33sasasa"));// it gives only integer because it give value as possible
console.log(parseInt("kijdlkdlskj2.33sasasa"));// it gives only integer because it give value as possible

*/

//difference 3:
/*
console.log(parseInt(11,2));// it has optional parameter redix which is used for binary or hexadecimal calculation
console.log(Number(2,2));// it gives float values
*/


// 17. Why does 0.1 + 0.2 !== 0.3 in JavaScript? or 18. Explain floating-point precision issues in JavaScript.
// because it convert 0.1 +0.2 as binary number and it has  floating precesion issue

// console.log(0.1+0.2);// it gives 0.3000000000004



// 20. What is the difference between slice and splice?

/* difference 1:
slice work on string and array but splice work only in array
*/
let str = "hello"
// console.log(str.slice(1));
let arr = ["a","b","c","d"]
// console.log(arr.slice(1));

// difference 2:
//slice only give piece or selected value but we can add , update or delete value with splice

// arr.splice(1,0,"22")
// console.log(arr);


// difference 3 :
// splice return deleted value and also change in orignal array but slice does not change in orignal array and return selected value

let sl = arr.slice(1,3)
console.log(arr);
console.log(sl);

let spl = arr.splice(2,1,"add")
console.log(arr);
console.log(spl);