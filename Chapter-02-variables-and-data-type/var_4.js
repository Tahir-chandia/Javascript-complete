// Primitive data types

//1. string

let name = "khan"; // "" this is string type

//2. number

let age = 24; //any number is number type

//3. bigint

let num = BigInt(2876633987); // we use Bigint() to use bigint type

// 4.Symbol
//pass

//5.null

let number = null; // we use null type for empty values

//6. boolean

let isLoggedIn = false; // we use boolean for true / false values

//7. undefined

let name_ = undefined; // we use undefined type if we want to add values after some time
let name2; //it is also undefined

//String concatination

/*if we want to add two variables at once we can use string concatination and also we can use this to add 
multiple strings*/

// let myName = "M.Tahir";
// let lastName = "Chandia";
// console.log(myName + " " + lastName); //we use + to concatination add added another string in this print to show some space

// let fullName = myName + lastName;
// console.log(fullName); //the output never show spaces

// Now we do this with number type

// let num1 = 24;
// let num2 = 30;
// let fullNum = num1 + num2; //it will add both numbers because both variables have number type
// console.log(fullNum);

// Type corcien

// when we join two different data type variables it gives one of that data type

//if we use (+) string with number then string and number it will concatinate the value just like string concatination

// let val1 = 24
// let val2 = "30"
// console.log(val1 + val2);


//if we use (-) string with number then string and number it will subtract the value just like Math sums


let val1 = 24
let val2 = "30"
console.log(val1 - val2);

//Javascript is Dynamic and Forgiving Language

// let name1 = "khan" //if we don't add semicolon (;) at the end it will forget this and execute it  
// name1 = 2 //if we change data type from string to number it will dynamically change the type and also don't give any 
// error


//Type checking

//if we want to check type of any variable we use (typeof) keyword

let newName = "Zahid"
let newAge = 32
let newUser = true
let newUserDetail = null
let newUserFriend;
let myFriendNum = BigInt(2145310445)

console.log();//string
console.log(typeof newName);//string
console.log(typeof newAge);//number
console.log(typeof newUser);//boolean
console.log(typeof newUserDetail);//object because it was a bug of javascript for a long time
console.log(typeof newUserFriend);//undefined
console.log(typeof myFriendNum);//bigint
