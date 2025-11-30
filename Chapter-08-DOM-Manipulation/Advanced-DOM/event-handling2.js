
// How to remove event listeners:

// if you want to properly add and then remove an event listener, you must:

// 1. Use addEventListener().

// 2. Use a named function, not an anonymous arrow function.

/*
function random(){
    
    console.log("I am random");
}

let h1 = document.querySelector("h1")
h1.addEventListener("click",random)

h1.removeEventListener("click",random)

*/

/*
Event Object:
The event object is an object that is automatically passed to the event handler function when an event occurs.
It contains important information about the event, such as what triggered the event, the type of event, and 
other details like the mouse coordinates, key pressed, and more.

*/


let h1 = document.querySelector("h1")
h1.addEventListener("click",(eventObj)=>{
console.log(eventObj);

})
