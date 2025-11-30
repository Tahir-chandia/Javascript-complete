// String has index (Positions) we can count positive index with 0 and negative index by -1

// let name ="Tahir"

// console.log(name);// Tahir
// console.log(name[0]);// T We can access index with [] after use variable and inside we give value to access
// console.log(name.at(-1));// r to access negative index we use at() because javascript does not suppot negative indexing direction it use updated in ES2022

/* Escape Sequence:
An escape sequence is a special character combo that lets you do things in a string that aren’t normally allowed—like adding quotes, new lines, or tabs.
 (e.g. \n, \t, \\, \”, \’, etc)
Escape sequences look like 2 characters in code,but they count as 1 character in string length.
*/

// let quote = "It\"s not possible" // it add " in quote
// let sentence = "Hello \n My name is Martin." // it break line
// let tab = "Hello \t My name is Martin." // it give space line
// let slash = "Hello \\ My name is Martin." // it give / line

// console.log(quote, "Length ="+ quote.length);
// console.log(sentence, "Length ="+ sentence.length);
// console.log(tab, "Length ="+ tab.length);
// console.log(slash, "Length ="+ slash.length);

/* Strings are immutable in javascrpt:
We cannot change in orignal string.*/

let myName = "Tahir";

console.log(myName);
console.log((myName[2] = "aaaaa"));

for (let char in myName) {
  char = myName + " s ";
  console.log(char);
}
console.log(myName);
 

//Constructor of string

let my = new String("Name")
console.log(my);
