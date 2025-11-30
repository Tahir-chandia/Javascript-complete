// Event handlings:

/* An event in JavaScript is something that happens in the browser, like a user clicking a button or moving the mouse. 

Example:
Mouse events (click, hover, double click, etc.)
Keyboard events (keypress, keyup, keydown, etc.)
Form events (submit, focus, input, etc.)

We can handle event using following three methods:
1. Inline method (inline javascript)
2. Property method
3. Listener method

Note:
❑ You can monitor events using “monitorEvents(document)” and
unmonitor using “unmonitorEvents(document)”.
*/

// 1. Inline method (inline javascript in html) 


// 2. Property method
// property-based event handling" or "direct event assignment"

// let h1 = document.querySelector("h1")
// h1.onclick=()=>{console.log("hello")}

// Note: 
// ❑ you can't add multiple handlers for the same event on the 
// same element using property method.

//3. Listener method
// "event listener method" or "modern event handling"

let h1 = document.querySelector("h1")

h1.addEventListener("click",()=>{
    console.log("i am hello");
    
})