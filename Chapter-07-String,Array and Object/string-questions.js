/*Q1. Create a program to take full name from user and generate a username start
with @, followed by their full name and ends with underscore followed by the
length of full name.*/


/*
let fullName = prompt("Enter your name")
let userName = "@"+fullName.toLowerCase().trim().replaceAll(" ","") +"_"+ fullName.length
let userName2 = `@${fullName.toLowerCase().trim().replaceAll(" ","")}_${fullName.length}`

// console.log(fullName);
console.log(userName2);
*/


/*2. Take a string and a character from the user and:
a) count how many times that character appears in the string.
b) Case-Insensitive Version
c) Find All Occurrence Positions
*/

/*
let str = "taAahir"
let ch = "i"
let count = 0
// for (let val of str){
    // if(val.toLowerCase() === ch.toLowerCase() ){
//     count++
// }
// }
for (let index in str){
if(str[index].toLowerCase() === ch.toLowerCase() ){
    console.log(index);
    
    count++
}
}
console.log(count);

*/

//Q3. Count the words present in a given string.

let str = "I am a boy how are u"
console.log(str.split(" ").length);
