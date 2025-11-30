/*Object In JavaScript:

An object is a collection of key-value pairs or stores related information as a set of key-value
pairs. It's a way to group data and functions together.
Example: Think of a real-life object “car”:

Object In JavaScript:
Create an object using literal syntax:*/

let car = {
    brand:"Toyota",// property 
    color:"red",//      //
    speed:120,  //      //
    drive:function(){console.log("The car is driving.");      // method
    },
    "*": "best car"
}

console.log(car);

//Create an object using the Object constructor:
let person =new Object({name:"tahir",
    age:24,
    "job time": "2 to 5",
    isMarried:false
})

console.log(person);

//Objects are mutable


/*properties in two ways:
Accessing Object Properties
1. Dot Notation (Most Common)*/

console.log(car.brand);// access of property
car.drive();// access of method
console.log(person.age);

//2. Bracket Notation (Useful with variables or special characters or strings with white spaces)

console.log(person["age"]);// access property
car["drive"]();// access method
let job = "job time"
console.log(person[job])
console.log(person["job time"])
console.log(car["*"])