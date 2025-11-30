//Event-propagation.
// Event propagation describes the way events travel through the DOM after they are triggered. It consists of three phases:

//1.Capturing phase:

// • The event travels from the root of the 
// DOM (e.g., document) down to the 
// target element.
// • This is also called the "trickling phase."


// 2. Target phase:
// • The event reaches the 
// target element where 
// the event occurred.

// 3.Bubbling phase:

// • The event travels back up 
// from the target element to 
// the root of the DOM.


let grand_parent = document.querySelector(".grand-parent") 
let parent = document.querySelector(".parent") 
let child = document.querySelector(".child") 

/*
grand_parent.addEventListener("click",()=>{
    alert("grand Parent pr click hua")
})

parent.addEventListener("click",()=>{
    alert("Parent pr click hua")
})

child.addEventListener("click",()=>{
    alert("Child pr click hua")
})
*/


// By default event travel as bubbling means target element to top

/*
grand_parent.addEventListener("click",()=>{
    alert("grand Parent pr click hua")
},true)

parent.addEventListener("click",()=>{
    alert("Parent pr click hua")
},true)

child.addEventListener("click",()=>{
    alert("Child pr click hua")
},true)
*/

// the third arguement(true) means now capturing or trickling phase work now event travels from root element to target element



grand_parent.addEventListener("click",()=>{
    alert("grand Parent pr click hua")
})

parent.addEventListener("click",()=>{
    alert("Parent pr click hua")
})
child.addEventListener("click",()=>{
    alert("Child pr click hua")
})
grand_parent.addEventListener("click",()=>{
    alert("grand Parent pr click hua")
},true)

parent.addEventListener("click",()=>{
    alert("Parent pr click hua")
},true)
child.addEventListener("click",()=>{
    alert("Child pr click hua")
},true)

// we can use both at once but in this case first event travels from root to target
//element than event travels from target element to root element. 