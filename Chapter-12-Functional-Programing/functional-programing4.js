// first class function:
//wo function jo ksi variable me store kya jae ya return kya jae ya pass kya jae to first class function hota h
/*
let func = function name(){
    console.log("ye function first class function h q k ise variable me store kya h.");
    return "ye function first class function h q k ise return kya h."
}
function func2(name2){
return name2 // ye function first class function h q k is me function pass kya h
}

// func()
// let old = func()
// console.log(old);
func2(func())
*/

// Higher order function...

// Jis function me koi function arguement me function le ya function return kre to wo Higher order function hota h

// ✅ Important Point
// Higher-order function khud ek function hota hai jo functions ke saath kaam karta hai.

// First Class Function
/*
function pehla(){
    console.log("ye pehla function h");
}

// First Class Function
function doosra(){
    console.log("ye dosra function h");
}

// Higher Order Function
function teesra(func){
    return func
}

teesra(pehla())
teesra(doosra())
*/

// Callback function...
// Callback wo function hota hai jo:
// Kisi aur function ko argument ke roop me pass hota hai
// Aur baad me call hota hai (sync ya async)
// 👉 Callback higher-order function ka argument hota hai.


function call(){
    console.log("I am callback");
}

function message(call){
call() // callback function return function me function ko call krna hota h
}
message(call)

// 🧠 Interview-Level Difference Table
// Concept	                Kya Hai?	        Role

// First-Class Function	    Language feature	Functions ko value banana
// Higher-Order Function	Function	Functions ko accept/return karna
// Callback Function	    Function	Pass hokar later execute hona
