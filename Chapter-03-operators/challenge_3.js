/* Challenge 3:
 On a login page, verify the user's credentials: Check if username is not empty AND password is not empty (&& operator). 
If either is empty, display an error message: "Both fields are required.".*/

let username = "a"
let password = ""
let message = username != "" && password != "" ? "Welcome "+ username:"Both fields are required."
// let message1 = (username  && password ) ? ("Welcome "+ username):("Both fields are required.")
// let message2 = username  && password  ? "Welcome "+ username:"Both fields are required."
console.log(message);


/* Chellenge 3.1:
find the largest number of the following numbers
let a = 2 ; let b = 42 ; let c=36*/
let a = 500 
let b =70
let c = 10
let res = (a>b)?(a>c ?a:c):(b>c ? b:c)
console.log(res);

