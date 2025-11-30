// 1. Build an increment–decrement counter similar to what you see in the shopping cart on Amazon or Flipkart.
let span = document.querySelector("span")
let incvalue = 0
let incbtn = document.querySelector(".increament")
let decbtn = document.querySelector(".decreament")

incbtn.addEventListener("click",()=>{
    if(incvalue >=0){
        ++incvalue
        span.innerHTML =incvalue
    }
})

decbtn.addEventListener("click",()=>{
 if(incvalue != 0){
     --incvalue
     span.innerHTML =incvalue
    }
})