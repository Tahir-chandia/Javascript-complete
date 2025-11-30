// Most Used Events:

// 1.Mouse Events

// 1.click 

// let h1 = document.querySelector("h1")

/*
h1.addEventListener("click",()=>{
    console.log("clicked");
})

//2.dblclick 
h1.addEventListener("dblclick",()=>{
    console.log("Double clicked");
})
*/

// 3.mousedown 

/*
h1.addEventListener("mousedown",()=>{
    console.log("Mouse down");
})

// 4.mouseup

h1.addEventListener("mouseup",()=>{
    console.log("Mouse up");
})

*/

// 5.mouseenter

// h1.addEventListener("mouseenter",(e)=>{
//     console.log(e);
// })

// 6.mouseleave 


// h1.addEventListener("mouseleave",()=>{
//     console.log("Mouse leave");
// })

// 7.mouseover 

// h1.addEventListener("mouseover",()=>{
//     console.log("Mouse over");
// })


//8. mouseout

// h1.addEventListener("mouseout",()=>{
//     console.log("Mouse out");
// })

// 9.mousemove

/*
h1.addEventListener("mousemove",()=>{
    console.log("Mouse move");
})

// 10.contextmenu
h1.addEventListener("contextmenu",()=>{
    console.log("context menu");
})
*/

// 2. Keyboard events.

// 1.keydown 


/*
let btn = document.querySelector("button")


btn.addEventListener("keydown",()=>{
    console.log("Key down");
    })
    
    // 2.keypress 
    btn.addEventListener("keypress",(k)=>{
    console.log("key press");
})
// 3.keyup
btn.addEventListener("keyup",(k)=>{
    console.log("key up");
})
*/

// 3. Form events

// 1.submit

let form = document.querySelector("form")

// form.addEventListener("submit",(k)=>{
//     k.preventDefault()
//     console.log("submit");
// })

// 2.reset

// form.addEventListener("reset",(k)=>{
//     k.preventDefault()
//     console.log("reset");
    
// })

// 3.focus

let input = document.querySelector("input")

// input.addEventListener("focus",(k)=>{
//     k.preventDefault()
//     console.log("focus");
    
// })

// 4.blur
// input.addEventListener("blur",(k)=>{
//     k.preventDefault()
//     console.log("blur");
    
// }) 


// 5.input
// input.addEventListener("input",(k)=>{
//     k.preventDefault()
//     console.log(input.value);
    
// })


// 6.change

// input.addEventListener("change",(k)=>{
//     k.preventDefault()
//     console.log(input.value);
    
// })

// 5.Touch Events

// 1.touchstart 

let div = document.querySelector("div")

// div.addEventListener("touchstart",(k)=>{
    
//     console.log("start");
    
// })


// 2.touchmove


// div.addEventListener("touchmove",(k)=>{
    
//     console.log("move");
    
// })

// 3.touchend


// div.addEventListener("touchend",(k)=>{
    
//     console.log("end");
    
// })

// 4.touchcancel


// div.addEventListener("touchcancel",(k)=>{
    
//     console.log("end");
    
// })


//6.Window Events

// 1.load 
// 2.DOMContentLoaded 
// 3.resize
// 4.scroll 


// 7.Clipboard Events
// 1.copy Content is copied.
// 2.cut Content is cut.
// 3.paste