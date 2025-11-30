// Rules for variable declaration:

//  1. Variable names are case sensitive;
let myname = "Tahir";
console.log(Name); // Name is another variable it gives ReferenceError: Name is not defined
//  2. “a” & “A” is different.
console.log(name); // we need to pass exact name of variable

//  3. Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
let name = "khan"; // Ok
let name1 = "khan"; // Ok
let name_ = "khan"; // Ok
let name$ = "khan"; // Ok
// let n ame  = "khan" //  SyntaxError: Unexpected identifier 'ame'
//  4. Only a letter, underscore( _ ) or $ should be 1st character.

let Name = "khan"; // Ok
let _Name = "khan"; // Ok
let $name = "khan"; // Ok
// let 1name = "khan" // SyntaxError: Invalid or unexpected token
// lett my = "khan sahab" //SyntaxError: Unexpected identifier 'my'
//  5. Reserved words cannot be variable names

let age = 24; // OK
// let const = 32 //SyntaxError: Unexpected token 'const'
//  let if = 32 //SyntaxError: Unexpected token 'if'

// different types of casses in programming

// we can use different kind of casses if we need to name a variable if name is bigger

let newname = "khan"; // we can use this but if we have two words then better way is we need to use casses

let newName = "Khan"; // Camel Case
let new_name = "khan"; // Snake Case
let NewName = "khan"; // Pascal case
