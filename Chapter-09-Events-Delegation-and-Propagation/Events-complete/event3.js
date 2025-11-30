// How To Stop Bubbling & Capturing?
// 1. stopPropagation()

let grand_parent= document.querySelector(".grand-parent")
let parent= document.querySelector(".parent")
let child= document.querySelector(".child")


grand_parent.addEventListener("click",function(event){
    console.log("grand Parent pr click hua")

event.stopPropagation()

},true)

// 2. stopImmediatePropagation()
parent.addEventListener("click",function(event){
    console.log("Parent pr click hua")
    event.stopImmediatePropagation()
},true)

//3.this
child.addEventListener("click",function(){
    console.log("Child pr click hua")
    console.log(this);
},true)
