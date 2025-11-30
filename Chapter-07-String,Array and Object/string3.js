// Properties and methods of strings

/* Properties:
str.length – tells how many characters are in a string. (length of string) properties give info does'nt change anything and we can't call when we use the property
*/



/*
let pass ="heLLo bhai"
// console.log(pass.length);

//Methods:

// 1. str.toUpperCase() – convert each letter into uppercase

let pass2 = pass.toUpperCase()
console.log(pass);// does not change in orignal string because string is immutable
console.log(pass2);

//2. str.toLowerCase() – convert each letter into lowercase

let pass3 = pass.toLowerCase()
console.log(pass3);
*/


//3. str.trim() – remove whitespaces  from start and end it does not remove whitespace between letters

/*
let myName = "         Tahir            "
let myName2 = myName.trim()

console.log(myName);
console.log(myName2);
*/


//4.  str.concat(str2) – joins str2 with str1

/*
let firstName = "Tahir "
let lastName = "Khan"
let fullName = firstName.concat(lastName)
console.log(firstName);
console.log(lastName);
console.log(fullName);
*/

//5.  str.includes() – checks if string contains given piece of string 

let sent = "Hello my name is Bautista"
console.log(sent.includes("y"));

//6.  str.indexOf() – gives the position (index) of the first match
console.log(sent.indexOf("t"));

//7.  str.charAt() – gives the character at given index
console.log(sent.charAt(22));

//8. str.replace(old, new) – replaces first matched part of the string with something else
    console.log(sent.replace("my","is"));

//9. str.replaceAll(old, new) – replaces all matched parts of the string with something else
    console.log(sent.replaceAll("is","my"));
//10. str.slice(start, end) – cuts out a piece of the string
console.log(sent.slice(6,17));

// ❑11. str.split() – the .split() method is used to break a string into parts and turn it into an array.

let sent2 = sent.split()
let sent3 = sent.split("")
console.log(sent2);
console.log(sent3);
