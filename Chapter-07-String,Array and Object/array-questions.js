//question 1. For an array with marks of students find the average marks of the entire class

// let marks = [44,33,20,18,29,52]
// let averageMarks =marks.reduce((pre,curr)=>{
//  let total =pre+curr
//   return total /= marks.length

// })
// console.log(averageMarks);


//question 2. Create an array with the given length(n) and fill with 0.
// let userLength = Number(prompt("Please give length"))
// let carr = new Array(userLength).fill(0)
// console.log(carr , carr.length);

//question 3. Create an array with the given length (n) and store natural numbers from 1 to n.

// let userLength = 6
// let filte = new Array(userLength).fill(0);

// filte.forEach((_,index)=>{
//     filte[index] = index+1
// })
// console.log(filte);

/*question 4. Consider an array of mcu heroes ([ironman, captain, black widow, wanda, hulk, black panther]).
Now:
a) Add spiderman at the end and thor at the start.
b) Remove black widow and add hawkeye in its place.
c) Check whether captain is present in the array*/
/*
let mcu = ['ironman', 'captain', 'black widow', 'wanda', 'hulk', 'black panther']

//a) Add spiderman at the end and thor at the start.
mcu.push("spiderman")
mcu.unshift("thor")
console.log(mcu);

//b) Remove black widow and add hawkeye in its place.

mcu.splice(3,1,"hawkeye")
console.log(mcu);

//c) Check whether captain is present in the array

let check = mcu.includes("captain")
console.log(check);

*/

/*5. How to check if given thing is array or not? How to convert other datatypes to array? What if we try
to convert an object into an array?

let arr =4

//How to check if given thing is array or not?

console.log(Array.isArray(arr));

// How to convert other datatypes to array?
// we can convert only string to array
console.log(Array.from(arr));
let arr2 = "Tahir"
console.log(Array.from(arr2));

// What if we try to convert an object into an array?
// it gives empty array

let obj = { name:"Tahir"}
console.log(Array.from(obj));
*/


/*6. We have three variables a, b, c,d a contains any number, b contains any string, c contains any object,
and d contains any array. Can we create an array from all these four variables? If yes, How?

let a =5
let b = "mokambo"
let c = {age:24}
let d = [2,4,true]

// yes we can convert with Array.of()method
console.log(Array.of(a,b,c,d));
*/

// 7. Check whether given string is palindrome or not.

// let str = "ollo"
// let revStr = str.split("").reverse().join("")
// // let revStr2 = Array.from(str).reverse().join("")

// if(str === revStr){
//     console.log("String is palandrome");
// }else{
//     console.log("String is not palandrome");
    
// }

// 8. Capitalize the first letter of every word in a sentence.

let str = "how are you my name is tahir"
let astr =str.split(" ")

let newArr =astr.map((elem)=>{
  return  elem.charAt(0).toUpperCase() + elem.slice(1);
}).join(" ")
let newStr = newArr 
console.log(newStr);




