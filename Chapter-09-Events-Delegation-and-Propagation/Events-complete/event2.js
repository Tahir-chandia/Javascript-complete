// event.target v/s event.currentTarget v/s this


let grand_parent= document.querySelector(".grand-parent")
let parent= document.querySelector(".parent")
let child= document.querySelector(".child")

// "event.target" : Identifying which child element was clicked or interacted with.


/*
grand_parent.addEventListener("click",(event)=>{
    console.log("grand Parent pr click hua")
    console.log(event.target)
})

parent.addEventListener("click",(event)=>{
    console.log("Parent pr click hua")
    console.log(event.target)
})
child.addEventListener("click",(event)=>{
    console.log("Child pr click hua")
    console.log(event.target)
})
*/


// event.currentTarget" : Always points to the element where the 
// listener is attached, regardless of where the event originated or which 
// element triggered it.


// grand_parent.addEventListener("click",(event)=>{
//     console.log("grand Parent pr click hua")
//     console.log(event.currentTarget)
// })

// parent.addEventListener("click",(event)=>{
//     console.log("Parent pr click hua")
//     console.log(event.currentTarget)
// })
// child.addEventListener("click",(event)=>{
//     console.log("Child pr click hua")
//     console.log(event.currentTarget)
// })


// "this": Refers to the context in which the function is executed. Inside 
// an event listener, this points to the element to which the event 
// listener was attached (the element where addEventListener was 
// used).

grand_parent.addEventListener("click",function(event){
    console.log("grand Parent pr click hua")
console.log(this);

})

parent.addEventListener("click",function(){
    console.log("Parent pr click hua")
    console.log(this);
})
child.addEventListener("click",function(){
    console.log("Child pr click hua")
    console.log(this);
})
